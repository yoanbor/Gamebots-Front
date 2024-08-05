import getAllGamesController from '../../presentation/controllers/game/GetAllGamesController';
import getImageBannerByGameIdController from '../../presentation/controllers/image/GetImageBannerByGameIdController';
import Game from '../models/Game';
import Image from '../models/Image';

export const fetchGameData = async (setData, setError) => {
  try {
    const result = await getAllGamesController();

    const games = await Promise.all(
      result.map(async (gameData) => {
        const game = new Game(
          gameData.idGame,
          gameData.title,
          gameData.studio,
          gameData.releaseDate,
          gameData.platform,
          gameData.story,
          gameData.isOnline,
          gameData.numberPlayers,
          gameData.creationDate,
          gameData.modificationDate
        );

        try {
          const images = await getImageBannerByGameIdController(game.idGame);
          if (images && images.length > 0) {
            const imageData = images[0];
            game.bannerImage = new Image(
              imageData.idImage,
              imageData.name,
              imageData.source,
              imageData.creationDate,
              imageData.modificationDate,
              imageData.game,
              imageData.typeImage
            );
          }
        } catch (error) {
          console.error(
            `Erreur lors de la récupération de la bannière pour le jeu ${game.title}`,
            error
          );
        }

        return game;
      })
    );

    setData(games);
  } catch (err) {
    setError(err);
  }
};

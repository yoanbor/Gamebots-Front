import getAllGamesController from "../../controllers/game/GetAllGamesController";
import getAllImages from "../../services/image/GetAllImagesService.jsx";
import Game from "../../models/Game";
import Image from "../../models/Image";

export const fetchGameData = async (setData, setError) => {
    try {
        const result = await getAllGamesController();
        const imagesData = await getAllImages();

        const imagesByGameId = imagesData.reduce((acc, image) => {
            acc[image.game.idGame] = image;
            return acc;
        }, {});

        const games = await Promise.all(result.map(async (gameData) => {
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

            const imageData = imagesByGameId[game.idGame];
            if (imageData) {
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

            return game;
        }));

        setData(games);
    } catch (err) {
        setError(err);
    }
};

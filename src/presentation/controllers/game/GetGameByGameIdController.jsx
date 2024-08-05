import getGameByGameId from '../../../services/game/GetGameByGameIdService.jsx';

const getGameByGameIdController = async (gameId) => {
  try {
    return getGameByGameId(gameId);
  } catch (error) {
    console.log('Erreur lors de la récupération du jeu par son id');
    throw error;
  }
};

export default getGameByGameIdController;

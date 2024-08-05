import getAllGames from '../../../services/game/GetAllGamesService.jsx';

const getAllGamesController = async () => {
  try {
    return await getAllGames();
  } catch (error) {
    console.log('Erreur lors de la récupération des jeux');
    throw error;
  }
};

export default getAllGamesController;

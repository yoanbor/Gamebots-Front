import getAllImagesByGameId from '../../../services/image/GetAllImagesByGameIdService.jsx';

const getAllImagesByGameIdController = async (gameId) => {
  try {
    return await getAllImagesByGameId(gameId);
  } catch (error) {
    console.log("Erreur lors de la récupération des images par l'id du jeu");
    throw error;
  }
};

export default getAllImagesByGameIdController;

import getImageByUserIdService from '../../../services/image/GetImageByUserIdService.jsx';

const getImageByUserIdController = async (userId) => {
  try {
    return getImageByUserIdService(userId);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de l'image par l'id de l'utilisateur"
    );
    throw error;
  }
};

export default getImageByUserIdController;

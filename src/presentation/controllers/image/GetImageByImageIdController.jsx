import getImageByImageId from '../../../services/image/GetImageByImageIdService.jsx';

const getImageByIdController = (imageId) => {
  try {
    return getImageByImageId(imageId);
  } catch (error) {
    console.log("Erreur lors de la récupération de l'image par son id");
    throw error;
  }
};

export default getImageByIdController;

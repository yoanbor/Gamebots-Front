import getAvatarImages from '../../../services/image/GetAvatarImagesService.jsx';

const getAvatarImagesController = async () => {
  try {
    return getAvatarImages();
  } catch (error) {
    console.log('Erreur lors de la récupération des images de type Avatar');
    throw error;
  }
};

export default getAvatarImagesController;

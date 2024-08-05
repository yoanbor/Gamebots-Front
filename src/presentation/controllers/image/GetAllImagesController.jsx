import getAllImages from '../../../services/image/GetAllImagesService.jsx';

const getAllImagesController = () => {
  try {
    return getAllImages();
  } catch (error) {
    console.error('Erreur lors de la récupération des images');
    throw error;
  }
};

export default getAllImagesController;

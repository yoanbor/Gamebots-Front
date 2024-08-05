import axios from 'axios';

const getImageByUserIdService = async (userId) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(
      'http://localhost:8080/users/' + userId + '/images',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(
      "Erreur lors de la récupération de l'image par l'id de l'utilisateur"
    );
    throw error;
  }
};

export default getImageByUserIdService;

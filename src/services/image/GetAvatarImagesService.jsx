import axios from 'axios';

const getAvatarImages = async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get('http://localhost:8080/images/avatars', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Erreur lors de la récupération des images de type Avatar');
    throw error;
  }
};

export default getAvatarImages;

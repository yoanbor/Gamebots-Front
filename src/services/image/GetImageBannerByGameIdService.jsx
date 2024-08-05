import axios from 'axios';

const getImageBannerByGameId = async (gameId) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(
      `http://localhost:8080/games/${gameId}/banner`,
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
      "Erreur lors de la récupération de l'image banner par l'id du jeu"
    );
    throw error;
  }
};

export default getImageBannerByGameId;

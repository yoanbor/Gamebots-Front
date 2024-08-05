import axios from 'axios';

const getAllImagesByGameId = async (gameId) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(
      'http://localhost:8080/games/' + gameId + '/images',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Erreur lors de la récupération des images par l'id du jeu");
    throw error;
  }
};

export default getAllImagesByGameId;

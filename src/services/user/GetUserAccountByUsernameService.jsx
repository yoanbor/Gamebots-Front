import axios from 'axios';

const getUserAccountByUsername = async (username) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(
      'http://localhost:8080/users/username/' + username,
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
      "Erreur lors de la récupération de l'utilisateur par son username"
    );
    throw error;
  }
};

export default getUserAccountByUsername;

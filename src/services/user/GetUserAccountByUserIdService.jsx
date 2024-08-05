import axios from 'axios';

const getUserAccountByUserId = async (userAccountId) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(
      'http://localhost:8080/users/' + userAccountId,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Erreur lors de la récupération de l'utilisateur par son id");
    throw error;
  }
};
export default getUserAccountByUserId;

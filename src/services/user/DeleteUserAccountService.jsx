import axios from 'axios';

const deleteUserAccount = async (userAccountId) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found');
  }

  try {
    const response = await axios.delete(
      `http://localhost:8080/users/${userAccountId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(
      "Erreur lors de la suppression de l'utilisateur",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export default deleteUserAccount;

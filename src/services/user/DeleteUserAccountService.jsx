import axios from "axios";

const deleteUserAccount = async (userAccountId) => {
    const token = localStorage.getItem('token');

    try {
        const response = await axios.delete(
            'http://localhost:8080/users/' + userAccountId, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.log("Erreur lors de la suppression de l'utilisateur");
        throw error;
    }
};

export default deleteUserAccount;
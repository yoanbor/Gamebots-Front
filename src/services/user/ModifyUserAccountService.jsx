import axios from "axios";

const modifyUserAccount = async (userAccountId) => {
    const token = localStorage.getItem("token");

    try {
        await axios.put( 'http://localhost:8080/users/' + userAccountId, {
            method: 'PUT',
            headers: {
            'Authorization': `Bearer ${token}`,
        }
    });
} catch (error) {
    console.log("Erreur lors de la modification de l'utilisateur");
    throw error;
    }
};

export default modifyUserAccount;
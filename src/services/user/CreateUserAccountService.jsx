import axios from "axios";

const createUserAccount = async (account) => {
    const token = localStorage.getItem('token');

    try {
        await axios.post('http://localhost:8080/users', account, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    } catch (error) {
        console.log("Erreur lors de la création de l'utilisateur");
        throw error;
    }
};

export default createUserAccount;
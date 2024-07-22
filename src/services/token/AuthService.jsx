import axios from "axios";

const loginUser = async (user) => {
    try {
        const response = await axios.post('http://localhost:8080/login', user, {
            method: 'POST'
        });
        return response.data;
    } catch (error) {
        console.log("Erreur lors de la connexion de l'utilisateur");
        throw error;
    }
};

export default loginUser;
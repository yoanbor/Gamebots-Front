import axios from "axios";

const createMessage = async (message) => {
    const token = localStorage.getItem("token");

    try {
        await axios.post('http://localhost:8080/messages', message, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    } catch (error) {
        console.log("Erreur lors de la création du message");
        throw error;
    }
};

export default createMessage;
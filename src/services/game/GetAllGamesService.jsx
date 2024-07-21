import axios from "axios";

const getAllGames = async () => {
    const token = localStorage.getItem('token');

    try {
        const response = await axios.get('http://localhost:8080/games', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log('Erreur lors de la récupération des jeux');
        throw error;
    }
};

export default getAllGames;

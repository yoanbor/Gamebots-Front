import axios from "axios";

const getGameByGameId = async (gameId) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.get(
            'http://localhost:8080/games/' + gameId, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
        return response.data;
    } catch (error) {
        console.log('Erreur lors de la récupération du jeu par son id: ', gameId);
        throw error;
    }
};

export default getGameByGameId;
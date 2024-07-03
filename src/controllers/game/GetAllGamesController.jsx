import getAllGames from "../../services/game/GetAllGamesService.jsx";

const getAllGamesController = () => {
    try {
        return getAllGames();
    } catch (error) {
        console.log("Erreur lors de la récupération des jeux");
        throw error;
    }
}

export default getAllGamesController;
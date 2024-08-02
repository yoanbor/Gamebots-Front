import getImageBannerByGameId from "../../services/image/GetImageBannerByGameIdService.jsx";

const getImageBannerByGameIdController = async (gameId) => {
    try {
        return getImageBannerByGameId(gameId);
    } catch (error) {
        console.log("Erreur lors de la récupération de l'image banner par l'id du jeu");
        throw error;
    }
}

export default getImageBannerByGameIdController;
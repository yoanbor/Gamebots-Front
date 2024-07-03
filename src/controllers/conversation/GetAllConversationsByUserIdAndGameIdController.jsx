import getAllConversationsByUserId from "../../services/conversation/GetAllConversationsByUserIdService.jsx";

const getAllConversationsByUserIdAndGameIdController = async (userId, gameId) => {
    try {
        return getAllConversationsByUserId(userId, gameId);
    } catch (error) {
        console.log("Erreur lors de la récupération des conversations par l'id de l'utilisateur et l'id du jeu");
        throw error;
    }
}

export default getAllConversationsByUserIdAndGameIdController;
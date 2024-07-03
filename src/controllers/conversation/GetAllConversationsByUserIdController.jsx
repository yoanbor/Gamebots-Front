import getAllConversationsByUserId from "../../services/conversation/GetAllConversationsByUserIdService.jsx";

const getAllConversationsByUserIdController = async (userId) => {
    try {
        getAllConversationsByUserId(userId);
    } catch (error) {
        console.log("erreur lors de la récupération des conversations par l'id de l'utilisateur");
        throw error;
    }
}

export default getAllConversationsByUserIdController;
import getConversationByConversationId from "../../services/conversation/ModifyConversationService.jsx";

const getConversationByConversationIdController = async (conversationId) => {
    try {
        return getConversationByConversationId(conversationId);
    } catch (error) {
        console.log("Erreur lors de la récupération de la conversation par son id");
        throw error;
    }
}

export default getConversationByConversationIdController;
import deleteConversation from "../../services/conversation/DeleteConversationByConversationIdService.jsx";

const deleteConversationByConversationIdController = async (conversationId) => {
    try {
        return deleteConversation(conversationId);
    } catch (error) {
        console.error("erreur lors de la suppression de la conversation");
        throw error;
    }
}

export default deleteConversationByConversationIdController;
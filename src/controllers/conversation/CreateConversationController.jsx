import createConversation from "../../services/conversation/CreateConversationService.jsx";

const createConversationController = async (conversation) => {
    try {
        return createConversation(conversation);
    } catch (error) {
        console.log("erreur lors de la création de la conversation");
    }
}

export default createConversationController;
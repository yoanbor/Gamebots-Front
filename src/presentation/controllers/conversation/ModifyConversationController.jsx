import modifyConversationByConversationId from '../../../services/conversation/ModifyConversationService.jsx';

const ModifyConversationController = async (conversationId) => {
  try {
    return modifyConversationByConversationId(conversationId);
  } catch (error) {
    console.log('Erreur lors de la modification de la conversation par son id');
    throw error;
  }
};

export default ModifyConversationController;

import createMessage from '../../../services/message/CreateMessageService.jsx';

const createMessageController = async (message) => {
  try {
    return createMessage(message);
  } catch (error) {
    console.error('Erreur lors de la création du message');
    throw error;
  }
};

export default createMessageController;

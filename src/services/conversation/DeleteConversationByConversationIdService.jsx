import axios from 'axios';

function deleteConversation(conversationId) {
  return axios.delete('http://localhost:8080/conversations/' + conversationId);
}

export default deleteConversation;

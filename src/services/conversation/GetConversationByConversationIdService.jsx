import axios from 'axios';

function getConversationByConversationId(conversationId) {
  return axios.get('http://localhost:8080/conversations/' + conversationId);
}

export default getConversationByConversationId;

import axios from 'axios';

function modifyConversationByConversationId(conversationId) {
  return axios.put('http://localhost:8080/conversations/' + conversationId);
}

export default modifyConversationByConversationId;

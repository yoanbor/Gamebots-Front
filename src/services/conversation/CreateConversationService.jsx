import axios from 'axios';

function createConversation(conversation) {
  return axios.post('http://localhost:8080/conversations', conversation);
}

export default createConversation;

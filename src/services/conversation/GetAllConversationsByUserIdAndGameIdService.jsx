import axios from 'axios';

function getAllConversationsByUserIdAndGameId(userId, gameId) {
  return axios.get(
    'http://localhost:8080/users/' +
      userId +
      '/games/' +
      gameId +
      '/conversations'
  );
}

export default getAllConversationsByUserIdAndGameId;

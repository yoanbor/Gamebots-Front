import axios from "axios";

function getAllConversationsByUserId(userId) {
    return axios.get('http://localhost:8080/users/' + userId + '/conversations');
}

export default getAllConversationsByUserId;
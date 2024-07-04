import axios from "axios";

function getImageByUserIdService(userId) {
    return axios.get('http://localhost:8080/users/' + userId + '/images')
}

export default getImageByUserIdService;
import axios from "axios";

function getUserAccountByUserId(userAccountId) {
    return axios.get('http://localhost:8080/users/' + userAccountId)
}

export default getUserAccountByUserId
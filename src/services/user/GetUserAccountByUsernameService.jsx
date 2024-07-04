import axios from "axios";

function getUserAccountByUsername(username) {
    return axios.get('http://localhost:8080/users', username)
}

export default getUserAccountByUsername
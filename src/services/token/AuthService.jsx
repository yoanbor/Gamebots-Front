import axios from "axios";

function loginUser(user) {
    return axios.post('http://localhost:8080/login', user);
}

export default loginUser;
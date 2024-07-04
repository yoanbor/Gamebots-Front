import axios from "axios";

function createUserAccount(account) {
    return axios.post('http://localhost:8080/users', account);
}

export default createUserAccount;
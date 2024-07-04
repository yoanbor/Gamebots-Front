import axios from "axios";

function modifyUserAccount(userAccountId) {
    return axios.put('http://localhost:8080/users/' + userAccountId)
}

export default modifyUserAccount;
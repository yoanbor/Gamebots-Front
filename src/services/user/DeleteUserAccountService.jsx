import axios from "axios";

function deleteUserAccount(userAccountId) {
    return axios.delete('http://localhost:8080/users/' + userAccountId);
}

export default deleteUserAccount;
import axios from "axios";

function createMessage(message) {
    return axios.post('http://localhost:8080/messages', message)
}

export default createMessage;
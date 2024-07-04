import axios from "axios";

function getAllImages() {
    return axios.get('http://localhost:8080/images')
}

export default getAllImages;
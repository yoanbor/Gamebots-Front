import axios from "axios";

function getImageByImageId(imageId) {
    return axios.get('http://localhost:8080/images/' + imageId)
}

export default getImageByImageId;
import axios from "axios";

const modifyUserAccount = async (user) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.put(`http://localhost:8080/users/${user.idUser}`, {
            username: user.username,
            phone: user.phone,
            email: user.email,
            password: user.password
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.log("Erreur lors de la modification de l'utilisateur", error.response ? error.response.data : error.message);
        throw error;
    }
};

export default modifyUserAccount;

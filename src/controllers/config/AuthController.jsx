import loginUser from "../../services/token/AuthService.jsx";


const loginUserController = async (user) => {
    try {
        return loginUser(user);
    } catch (error) {
        console.error("Erreur lors de la connection de l'utilisateur.");
        throw error;
    }

}

export default loginUserController;
import getUserAccountByUserId from "../../services/user/GetUserAccountByUserIdService.jsx";

const getUserAccountByUsernameController = async (username) => {
    try {
        return getUserAccountByUserId(username);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur par son username");
        throw error;
    }
}

export default getUserAccountByUsernameController;
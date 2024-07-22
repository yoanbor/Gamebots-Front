import getUserAccountByUsername from "../../services/user/GetUserAccountByUsernameService.jsx";

const getUserAccountByUsernameController = async (username) => {
    try {
        return getUserAccountByUsername(username);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur par son username");
        throw error;
    }
}

export default getUserAccountByUsernameController;
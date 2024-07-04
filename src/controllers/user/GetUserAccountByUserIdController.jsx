import getUserAccountByUserId from "../../services/user/GetUserAccountByUserIdService.jsx";

const getUserAccountByUserIdController = async (userAccountId) => {
    try {
        return getUserAccountByUserId(userAccountId);
    } catch (error) {
        console.log("Erreur lors de la récupération de l'utilisateur par son id");
        throw error;
    }
}

export default getUserAccountByUserIdController;
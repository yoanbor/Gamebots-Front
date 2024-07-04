import deleteUserAccount from "../../services/user/DeleteUserAccountService.jsx";

const deleteUserAccountController = async (userAccountId) => {
    try {
        return deleteUserAccount(userAccountId);
    } catch (error) {
        console.log("Erreur lors de la suppression de l'utilisateur");
        throw error;
    }
}

export default deleteUserAccountController;
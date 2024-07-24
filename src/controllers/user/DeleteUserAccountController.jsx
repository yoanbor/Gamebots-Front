import deleteUserAccount from "../../services/user/DeleteUserAccountService.jsx";

const deleteUserAccountController = async (userAccountId) => {
    try {
        return await deleteUserAccount(userAccountId);
    } catch (error) {
        console.log("Erreur lors de la suppression de l'utilisateur:", error.response ? error.response.data : error.message);
        throw error;
    }
}

export default deleteUserAccountController;

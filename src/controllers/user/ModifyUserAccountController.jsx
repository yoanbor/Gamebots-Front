import modifyUserAccount from "../../services/user/ModifyUserAccountService.jsx";

const ModifyUserAccountController = async (userAccountId) => {
    try {
        return modifyUserAccount(userAccountId)
    } catch (error) {
        console.error("Erreur lors de la modification de l'utilisateur par son id");
        throw error;
    }
}

export default ModifyUserAccountController;
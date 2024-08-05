import deleteUserAccountController from '../../presentation/controllers/user/DeleteUserAccountController.jsx';

export const deleteAccount = async (navigate, setError) => {
  try {
    await deleteUserAccountController(localStorage.userAccountId);
    localStorage.removeItem('userAccountId');
    localStorage.removeItem('token');
    navigate('/login');
  } catch (error) {
    setError('Erreur lors de la suppression du compte utilisateur');
  }
};

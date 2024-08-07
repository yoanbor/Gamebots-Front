import User from '../../models/User.jsx';
import loginUserController from '../../presentation/controllers/config/AuthController.jsx';
import getUserAccountByUsernameController from '../../presentation/controllers/user/GetUserAccountByUsernameController.jsx';

export const handleSubmitForLogin = async (
  e,
  pseudo,
  password,
  setPseudo,
  setPassword,
  navigate,
  setError
) => {
  e.preventDefault();
  setError('');
  const user = new User(null, pseudo, null, null, password, null, null, null);

  try {
    const response = await loginUserController(user);
    if (response && response.data) {
      localStorage.setItem('token', response.data);
      localStorage.setItem('username', pseudo);

      const userAccountId = await getUserAccountByUsernameController(pseudo);
      localStorage.setItem('userAccountId', userAccountId);

      setPseudo('');
      setPassword('');
      setError(null);

      navigate('/home');
    } else {
      new Error('Utilisateur non valide');
    }
  } catch (err) {
    setError(err.message || 'Erreur de connexion, veuillez réessayer.');
  }
};

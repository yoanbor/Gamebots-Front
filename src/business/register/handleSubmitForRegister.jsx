import getUserAccountByUsernameController from '../../presentation/controllers/user/GetUserAccountByUsernameController.jsx';
import loginUserController from '../../presentation/controllers/config/AuthController.jsx';
import User from '../../models/User.jsx';
import createUserAccountController from '../../presentation/controllers/user/CreateUserAccountController.jsx';

export const handleSubmitForRegister = async (
  e,
  pseudo,
  email,
  password,
  confirmPassword,
  setError,
  navigate,
  setPseudo,
  setEmail,
  setPassword,
  setConfirmPassword
) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setError('Les mots de passe ne correspondent pas.');
    return;
  }

  const defaultAvatarId = 1;

  const newUser = new User(
    null,
    pseudo,
    null,
    email,
    password,
    new Date(),
    null,
    { idImage: defaultAvatarId }
  );

  try {
    await createUserAccountController(newUser);

    const user = new User(
      null,
      pseudo,
      null,
      email,
      password,
      null,
      null,
      null
    );
    const response = await loginUserController(user);

    if (response && response.data) {
      localStorage.setItem('token', response.data);
      localStorage.setItem('username', pseudo);

      const userAccountId = await getUserAccountByUsernameController(pseudo);
      localStorage.setItem('userAccountId', userAccountId);

      setPseudo('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError(null);

      navigate('/home');
    } else {
      setError('Utilisateur non valide');
    }
  } catch (err) {
    setError(
      err.message || "Erreur lors de l'inscription, veuillez réessayer."
    );
  }
};

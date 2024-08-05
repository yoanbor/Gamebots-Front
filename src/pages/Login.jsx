import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import RegisterAndLoginLeftPart from '../components/RegisterLoginLeftPart.jsx';
import { EyeOffIcon } from '../styles/assets/icons/eye-off.jsx';
import { EyeIcon } from '../styles/assets/icons/eye.jsx';
import { togglePassword } from '../business/togglePassword.jsx';
import { handleSubmitForLogin } from '../business/login/handleSubmitForLogin.jsx';

function Login() {
  const [inputType, setInputType] = useState('password');
  const passwordInput = useRef(null);
  const handleTogglePassword = () =>
    togglePassword(passwordInput, setInputType);
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  return (
    <div className={'login'}>
      <RegisterAndLoginLeftPart />
      <div className="login-right-part">
        <h1>Gamebots</h1>
        <div className="form-container">
          <form
            className={'form'}
            onSubmit={(e) =>
              handleSubmitForLogin(
                e,
                pseudo,
                password,
                setPseudo,
                setPassword,
                navigate,
                setError
              )
            }
          >
            <label className="labels">
              <p className="label" id="label-pseudo">
                Pseudo
              </p>
              <input
                type="text"
                className="inputs"
                required
                placeholder="Herobrine"
                autoComplete="username"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
              />
            </label>
            <div className={'field field-password'}>
              <label className={'labels'}>
                <p className={'label'} id={'label-password'}>
                  Mot de passe
                </p>
                <input
                  type={inputType}
                  ref={passwordInput}
                  className={'inputs'}
                  id={'password1'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••••"
                  autoComplete="new-password"
                />
              </label>
              <div className={'password-toggle'} onClick={handleTogglePassword}>
                {inputType === 'password' ? <EyeOffIcon /> : <EyeIcon />}
              </div>
            </div>
            <input type={'submit'} id={'login'} value="Se connecter" />
            <p id={'lostPassword'}>Mot de passe oublié ?</p>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Vous n'avez pas de compte ?
          <NavLink to={'/register'} id={'need-to-register'}>
            {' '}
            Inscrivez vous
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;

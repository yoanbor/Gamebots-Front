import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import RegisterAndLoginLeftPart from "../components/RegisterLoginLeftPart.jsx";
import { togglePassword } from "../business/togglePassword.jsx";
import { handleSubmitForRegister } from "../business/register/handleSubmitForRegister.jsx";
import {EyeOffIcon} from "../assets/icons/eye-off.jsx";
import {EyeIcon} from "../assets/icons/eye.jsx";

function Register() {
    const [inputType, setInputType] = useState('password');
    const [inputType2, setInputType2] = useState('password');
    const passwordInput = useRef(null);
    const passwordInput2 = useRef(null);
    const handleTogglePassword = () => togglePassword(passwordInput, setInputType);
    const handleTogglePassword2 = () => togglePassword(passwordInput2, setInputType2);
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="register">
            <RegisterAndLoginLeftPart />

            <div className="register-right-part">
                <h1>Gamebots</h1>
                <div className="form-container">
                    <form className="form" onSubmit={(e) => handleSubmitForRegister(e, pseudo, email, password, confirmPassword, setError, navigate, setPseudo, setEmail, setPassword, setConfirmPassword)}>
                        <label className="labels">
                            <p className='label' id="label-pseudo">Pseudo</p>
                            <input type="text" className="inputs" required placeholder="Herobrine" autoComplete="username" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
                        </label>

                        <label className="labels">
                            <p className='label' id="label-email">Email</p>
                            <input type="email" className="inputs" required placeholder="stevelapioche@mc.com" value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
                        </label>

                        <div className="field field-password">
                            <label className="labels">
                                <p className='label' id="label-password">Mot de passe</p>
                                <input type={inputType} ref={passwordInput} required className="inputs" id="password1" autoComplete="new-password" placeholder="••••••••••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <div className="password-toggle" onClick={handleTogglePassword}>
                                {inputType === 'password' ? <EyeOffIcon /> : <EyeIcon />}
                            </div>
                        </div>

                        <div className="field field-password">
                            <label className="labels">
                                <p className='label' id="label-confirmPassword">Confirmer votre mot de passe</p>
                                <input type={inputType2} ref={passwordInput2} required autoComplete="new-password" className="inputs" id="password2" placeholder="••••••••••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </label>
                            <div className="password-toggle" onClick={handleTogglePassword2}>
                                {inputType2 === 'password' ? <EyeOffIcon /> : <EyeIcon />}
                            </div>
                        </div>

                        {error && <p className="error">{error}</p>}

                        <label className="checkbox">
                            <input type="checkbox" required id="CGU" />
                            Veuillez accepter les
                            <NavLink to={"/CGU"} id="need-to-login"> Conditions Générales d’Utilisations</NavLink> et
                            les
                            <NavLink to={"/MentionsLegales"} id="need-to-login"> Mentions Légales</NavLink>
                        </label>

                        <input type="submit" id="register" value="S'inscrire" />
                    </form>
                </div>

                <p>
                    Vous avez déjà un compte ?
                    <NavLink to={"/Login"} id="need-to-login"> Connectez vous</NavLink>
                </p>
            </div>
        </div>
    );
}

export default Register;

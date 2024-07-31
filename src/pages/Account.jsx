import { useRef, useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { EyeOffIcon } from "../assets/icons/eye-off.jsx";
import { EyeIcon } from "../assets/icons/eye.jsx";
import { togglePassword } from "../business/togglePassword.jsx";
import { handleSubmitForAccount } from "../business/account/handleSubmitForAccount.jsx";
import { getAndRegisterUserAccountIdToLocalStorage } from "../business/account/getAndRegisterUserAccountIdToLocalStorage.jsx";
import { fetchUserData } from "../business/account/fetchUserData.jsx";
import { resetInputs } from "../business/account/resetInputs.jsx";
import { deleteAccount } from "../business/account/deleteAccount.jsx";
import AvatarImages from "../business/account/AvatarImages.jsx";

const Account = () => {
    const [inputType, setInputType] = useState('password');
    const passwordInput = useRef(null);
    const handleTogglePassword = () => togglePassword(passwordInput, setInputType);
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(null);
    const [defaultPseudo, setDefaultPseudo] = useState('');
    const [defaultEmail, setDefaultEmail] = useState('');
    const [defaultPhoneNumber, setDefaultPhoneNumber] = useState('');
    const [userId, setUserId] = useState(null);
    const [userAccountId, setUserAccountId] = useState(localStorage.getItem('userAccountId'));
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccountId = async () => {
            if (!userAccountId) {
                await getAndRegisterUserAccountIdToLocalStorage(setUserAccountId, setError);
            }
        };
        fetchAccountId();
    }, [userAccountId]);

    useEffect(() => {
        const fetchData = async () => {
            if (userAccountId) {
                await fetchUserData(userAccountId, setUserId, setPseudo, setEmail, setPassword, setPhoneNumber, setDefaultPseudo, setDefaultEmail, setDefaultPhoneNumber, setError);
            }
        };
        fetchData();
    }, [userAccountId]);

    const resetInputsHandler = () => {
        resetInputs(setPseudo, setEmail, setPassword, setPhoneNumber, defaultPseudo, defaultEmail, defaultPhoneNumber);
    };

    const deleteAccountHandler = async () => {
        await deleteAccount(navigate, setError);
    };

    return (
        <div className="account-page">
            <Header />
            <div className="account-page-container">
                <div className="account-left-part">
                    <AvatarImages />
                </div>
                <div className="account-right-part">
                    <div className="informations-part">
                        <h2>Modifier mes informations</h2>
                        <div className="form-container">
                            <form className="form" onSubmit={(e) => handleSubmitForAccount(e, userAccountId, password, userId, pseudo, phoneNumber, email, setError)}>
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
                                        <input type={inputType} ref={passwordInput} className="inputs" id="password1" autoComplete="new-password" placeholder="••••••••••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </label>
                                    <div className="password-toggle" onClick={handleTogglePassword}>
                                        {inputType === 'password' ? <EyeOffIcon /> : <EyeIcon />}
                                    </div>
                                </div>
                                <label className="labels">
                                    <p className='label' id="label-phone">Numéro de téléphone</p>
                                    <input type="tel" className="inputs" placeholder="00.00.00.00.00" autoComplete="tel" value={phoneNumber} pattern="[0-9]{10}" onChange={(e) => setPhoneNumber(e.target.value)} />
                                </label>
                                {error && <p className="error">{error}</p>}
                                <div className="button-container">
                                    <button type="button" onClick={deleteAccountHandler} className="delete-button">Supprimer mon compte</button>
                                    <button type="button" className="cancel-button" onClick={resetInputsHandler}>Annuler</button>
                                    <input type="submit" id="register" value="Valider" />
                                </div>
                            </form>
                        </div>
                        <div className="mentions">
                            <NavLink to={"/MentionsLegales"} id="need-to-login">Mentions Légales</NavLink>
                            <NavLink to={"/CGU"} id="need-to-login">CGU</NavLink>
                            <NavLink to={"/Copyright"} id="need-to-login">Copyright © 2024 GameBots</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;

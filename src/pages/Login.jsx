import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";

function Login() {
    const [inputType, setInputType] = useState('password');

    const passwordInput = useRef(null);

    const togglePassword = () => {
        if (passwordInput.current) {
            setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
        }
    };

    return (
        <div className={"login"}>

            <div className="login-left-part">
                <img src={"../../public/avatars/AvatarBang.png"} id={"avatar-Bangalore"} className={"img-avatars"} alt="Avatar Bangalor" />
                <img src={"../../public/avatars/AvatarBlood.png"} id={"avatar-Bloodhunt"} className={"img-avatars"} alt="Avatar Bloodhunt" />
                <img src={"../../public/avatars/AvatarLifeline.png"} id={"avatar-Lifeline"} className={"img-avatars"} alt="Avatar Lifeline" />
                <img src={"../../public/avatars/AvatarPath.png"} id={"avatar-Pathfinder"} className={"img-avatars"} alt="Avatar Pathfinder" />
                <img src={'../../public/Logo.svg'} id={"big-logo"} className={"img-avatars"} alt="logo Gamebots" />

                <div className={'msg'} id={"msg-gamebot"}>
                    <div className={"img-gamebot"}>
                        <img src={'../../public/Logo.svg'} id={"logo-msg"} alt="logo Gamebots" />
                    </div>
                    <div className={"message-gamebot"}>
                        <h4>Gamebot</h4>
                        <p>Bonjour, en quoi puis-je vous aider ?</p>
                    </div>
                </div>

                <div className={"msg"} id={"msg-user"}>
                    <div className={"message-user"}>
                        <h4>Herobrine</h4>
                        <p>Comment économiser ses munitions ?</p>
                    </div>
                    <div className={"img-user"}>
                        <img src={"../../public/avatars/AvatarPath.png"} id={"logo-msg"} alt="Avatar Pathflinder" />
                    </div>
                </div>
            </div>

            <div className="login-right-part">
                <h1>Gamebots</h1>
                <div className="form-container">
                    <form className={"form"}>

                        <label className={"labels"}>
                            <p className={'label'} id={"label-email"}>Email</p>
                            <input type={"text"} className={"inputs"} placeholder="stevelapioche@mc.com"/>
                        </label>

                        <div className={"field field-password"}>
                            <label className={"labels"}>
                                <p className={'label'} id={"label-password"}>Mot de passe</p>
                                <input type={inputType} ref={passwordInput} className={"inputs"} id={"password1"}
                                       placeholder="••••••••••••••••"/>
                            </label>
                            <div className={"password-toggle"} onClick={togglePassword}>
                                {inputType === 'password' ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.88013 9.88C9.58538 10.1547 9.34897 10.4859 9.185 10.8539C9.02103 11.2218 8.93287 11.6191 8.92576 12.0219C8.91865 12.4247 8.99275 12.8248 9.14364 13.1984C9.29452 13.5719 9.5191 13.9113 9.80397 14.1962C10.0888 14.481 10.4282 14.7056 10.8017 14.8565C11.1753 15.0074 11.5754 15.0815 11.9782 15.0744C12.381 15.0673 12.7783 14.9791 13.1463 14.8151C13.5143 14.6512 13.8455 14.4148 14.1201 14.12M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68M6.61 6.60999C4.62125 7.96461 3.02987 9.82524 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39M2 2L22 22"
                                            stroke="#09090B" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                                              stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path
                                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                            stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                )}
                            </div>
                        </div>

                        <label className={"checkbox"}>
                            <input type={'checkbox'} id={"CGU"}/>
                            Veuillez accepter les
                            <NavLink to={'/CGU'} id={"need-to-login"}> Conditions Générales
                                d’Utilisations</NavLink> et
                            les
                            <NavLink to={'/MentionsLegales'} id={"need-to-login"}> Mentions Légales</NavLink>
                        </label>

                        <input type={'submit'} id={"login"} value="S'inscrire"/>
                    </form>
                </div>

                <p>
                    Vous avez déjà un compte ?
                    <NavLink to={'/Login'} id={"need-to-login"}> Connectez vous</NavLink>
                </p>
            </div>
        </div>
    );
}

export default Login;

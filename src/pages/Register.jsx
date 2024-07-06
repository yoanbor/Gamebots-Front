import {NavLink} from "react-router-dom";

function Register () {
    return (
        <div className={"register"}>

            <div className="register-left-part">

                <img src={"../../public/avatars/AvatarBang.png"} alt="Avatar Bangalor"/>
                <img src={"../../public/avatars/AvatarBlood.png"} alt="Avatar Bloodhunt"/>
                <img src={"../../public/avatars/AvatarLifeline.png"} alt="Avatar Lifeline"/>
                <img src={"../../public/avatars/AvatarPath.png"} alt="Avatar Pathflinder"/>
                <img src={'../../public/Logo.svg'} id={"big-logo"} alt="logo Gamebots"/>

                <div className={'msg'}>

                    <div className={"img-gamebot"}>
                        <img src={'../../public/Logo.svg'} id={"logo-msg"} alt="logo Gamebots"/>
                    </div>

                    <div className={"message-gamebot"}>
                        <h4 id={"gamebot-h4"}>Gamebot</h4>
                        <p>Bonjour, en quoi puis-je vous aider ?</p>
                    </div>

                </div>

                <div className={"msg"}>

                    <div className={"message-user"}>
                        <h4>Herobrine</h4>
                        <p>Comment économiser ses munitions ?</p>
                    </div>

                    <div className={"img-user"}>
                        <img src={"../../public/avatars/AvatarPath.png"} id={"logo-msg"} alt="Avatar Pathflinder"/>
                    </div>

                </div>

            </div>

            <div className="register-right-part">

                <h1>Gamebots</h1>

                <div className="form-container">
                    <form className={"form"}>

                        <label className={"labels"}>
                            Pseudo
                            <input type={"text"} className={"inputs"} placeholder="Herobrine"/>
                        </label>

                        <label className={"labels"}>
                            Email
                            <input type={"text"} className={"inputs"} placeholder="stevelapioche@mc.com"/>
                        </label>

                        <label className={"labels"}>
                            Mot de passe
                            <input type={"password"} className={"inputs"} placeholder="••••••••••••••••"/>
                        </label>

                        <label className={"labels"}>
                            Mot de passe
                            <input type={"password"} className={"inputs"} placeholder="••••••••••••••••"/>
                        </label>

                        <label className={"checkbox"}>
                            <input type={'checkbox'} id={"CGU"}/>
                            Veuillez accepter les
                            <NavLink to={'/CGU'} id={"need-to-login"}> Conditions Générales d’Utilisations</NavLink> et les
                            <NavLink to={'/MentionsLegales'} id={"need-to-login"}> Mentions Légales</NavLink>
                        </label>

                        <input type={'submit'} id={"register"} value="S'inscrire"/>

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

export default Register;
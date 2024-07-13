import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isMyAccountVisible, setIsMyAccountVisible] = useState(false);

    const toggleMyAccountContainer = () => {
        setIsMyAccountVisible(!isMyAccountVisible);
    };

    return (
        <header>
            <div className="header-left-part">
                <Link to="/Home">
                    <img src={'../../public/Logo.svg'} alt="logo Gamebots" />
                    <h1>Gamebots</h1>
                </Link>
            </div>
            <div className="header-right-part">
                <form>
                    <input type="text" placeholder="Rechercher" />
                </form>
                <button className="my-account" onClick={toggleMyAccountContainer}>
                    <img src={'../../public/avatars/AvatarPath.png'} alt="avatar utilisateur" />
                </button>
                {isMyAccountVisible && (
                    <div className="my-account-container">
                        <Link to="/Account">
                            <div className="go-to-my-account">
                                <img src={'../../public/avatars/AvatarPath.png'} alt="avatar utilisateur" />
                                <p>Mon compte</p>
                            </div>
                        </Link>
                        <Link to="/Login">
                            <div className="disconnect">
                                <img src={'../../public/icons/User-xuser.svg'} alt="icon déconnection" />
                                <p>Se déconnecter</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

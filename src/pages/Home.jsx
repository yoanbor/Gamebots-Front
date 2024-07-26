import { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import { fetchGameData } from "../business/home/fetchGameData.jsx";

const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchGameData(setData, setError);
    }, []);

    return (
        <div className="home-page">
            <Header />
            <div>
                {error && <div>Erreur lors de la récupération des données : {error.message}</div>}
                {data ? (
                    <div className="games-list">
                        <h2>Tous les jeux</h2>
                        <ul>
                            {data.map(game => (
                                <li key={game.idGame}>
                                    <div className="games">
                                        {game.bannerImage && <img src={game.bannerImage.source} alt={game.title} />}
                                        <p>{game.title}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    !error && <div>Chargement des données...</div>
                )}
            </div>
        </div>
    );
};

export default Home;

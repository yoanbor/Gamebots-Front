import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header.jsx";
import { fetchGameData } from "../business/home/fetchGameData.jsx";

const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                await fetchGameData((games) => {
                    if (isMounted) setData(games);
                }, setError);
            } catch (err) {
                if (isMounted) setError(err);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    const handleGameClick = (idGame) => {
        navigate(`/game/${idGame}`);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredData = data ? data.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    return (
        <div className="home-page">
            <Header onSearch={handleSearch} />
            <div>
                {error && <div className="error-message">Erreur lors de la récupération des données : {error.message}</div>}
                {data ? (
                    <div className="games-list">
                        <h2>Tous les jeux</h2>
                        <ul>
                            {filteredData.map(game => (
                                <li key={game.idGame} onClick={() => handleGameClick(game.idGame)}>
                                    <div className="games">
                                        {game.bannerImage ? (
                                            <img src={game.bannerImage.source} alt={`Bannière de ${game.title}`} />
                                        ) : (
                                            <div className="placeholder-banner" style={{ backgroundColor: '#ccc', height: '100px', width: '200px' }}>
                                                Image indisponible
                                            </div>
                                        )}
                                        <h3>{game.title}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    !error && <div className="loading-message">Chargement des données...</div>
                )}
            </div>
        </div>
    );
};

export default Home;

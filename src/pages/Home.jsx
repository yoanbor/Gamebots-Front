import { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import getAllGamesController from "../controllers/game/GetAllGamesController";
import Game from "../models/Game";
import Image from "../models/Image";
import getAllImages from "../services/image/GetAllImagesService.jsx";

const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllGamesController();
                const imagesData = await getAllImages();

                const imagesByGameId = imagesData.reduce((acc, image) => {
                    acc[image.game.idGame] = image;
                    return acc;
                }, {});

                const games = await Promise.all(result.map(async (gameData) => {
                    const game = new Game(
                        gameData.idGame,
                        gameData.title,
                        gameData.studio,
                        gameData.releaseDate,
                        gameData.platform,
                        gameData.story,
                        gameData.isOnline,
                        gameData.numberPlayers,
                        gameData.creationDate,
                        gameData.modificationDate
                    );

                    const imageData = imagesByGameId[game.idGame];
                    if (imageData) {
                        game.bannerImage = new Image(
                            imageData.idImage,
                            imageData.name,
                            imageData.source,
                            imageData.creationDate,
                            imageData.modificationDate,
                            imageData.game,
                            imageData.typeImage
                        );
                    }

                    return game;
                }));

                setData(games);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="home-page">
            <Header />
            <div>
                {error && <div>Erreur lors de la récupération des données : {error.message}</div>}
                {data ? (
                    <div className={"games-list"}>
                        <h2>Tous les jeux</h2>
                        <ul>
                            {data.map(game => (
                                <li key={game.idGame}>
                                    <div className={"games"}>
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

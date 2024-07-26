import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getGameByGameId from "../services/game/GetGameByGameIdService.jsx";
import {BadgeInfoIcon} from "../assets/icons/badge-info.jsx";
import {PlaystationIcon} from "../assets/icons/playstation.jsx";
import {PersonStandingIcon} from "../assets/icons/person-standing.jsx";
import {CalendarDaysIcon} from "../assets/icons/calendar-days.jsx";
import {BookOpenIcon} from "../assets/icons/book-open.jsx";

const Game = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const gameData = await getGameByGameId(id);
                setGame(gameData);
            } catch (err) {
                setError(err);
            }
        };
        fetchGame();
    }, [id]);

    return (
        <main>
            {error && <div>Erreur lors de la récupération des données : {error.message}</div>}
            {game ? (
                <div className="main">
                    <div className={"game-part"}>
                    <h1>{game.title}</h1>
                    <h2>{game.studio}</h2>
                    <div className="informations-container">
                        <div className="informations-left-part">
                            <div className="informations">
                                <BadgeInfoIcon/>
                                <h3> Informations</h3>
                            </div>
                            <div className="platform">
                                {game.platform === "playstation" ? <PlaystationIcon/> : <PlaystationIcon/>}
                                <h4>{game.platform}</h4>
                            </div>
                            <div className="numbersPlayers">
                                <PersonStandingIcon/>
                                <h4>{game.numberPlayers} joueur{game.numberPlayers > 1 ? "s" : ""}</h4>
                            </div>
                            <div className="releaseDate">
                                <CalendarDaysIcon/>
                                <h4>Date de sortie : {game.releaseDate}</h4>
                            </div>
                        </div>
                            <div className="informations-right-part">
                                <div className="history">
                                    <BookOpenIcon />
                                    <h4>Histoire</h4>
                                </div>
                                    <p>{game.story}</p>

                            </div>
                        </div>
                    </div>
                    <div className={"ia"}>
                        <h1>hey</h1>
                    </div>
                </div>

            ) : (
                !error && <div>Chargement des données...</div>
            )}
        </main>
    );
};

export default Game;

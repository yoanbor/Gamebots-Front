import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getGameByGameId from '../services/game/GetGameByGameIdService.jsx';
import getImageBannerByGameIdController from '../presentation/controllers/image/GetImageBannerByGameIdController';
import getAllImagesByGameIdController from '../services/image/GetAllImagesByGameIdService.jsx';
import { BadgeInfoIcon } from '../styles/assets/icons/badge-info.jsx';
import { PlaystationIcon } from '../styles/assets/icons/playstation.jsx';
import { PersonStandingIcon } from '../styles/assets/icons/person-standing.jsx';
import { CalendarDaysIcon } from '../styles/assets/icons/calendar-days.jsx';
import { BookOpenIcon } from '../styles/assets/icons/book-open.jsx';

const Game = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameData = await getGameByGameId(id);
        setGame(gameData);

        const bannerImages = await getImageBannerByGameIdController(id);
        if (bannerImages && bannerImages.length > 0) {
          setBannerImage(bannerImages[0].source);
        }

        const gameImages = await getAllImagesByGameIdController(id);
        setImages(gameImages);
      } catch (err) {
        setError(err);
      }
    };
    fetchGame();
  }, [id]);

  return (
    <main>
      {error && (
        <div>Erreur lors de la récupération des données : {error.message}</div>
      )}
      {game ? (
        <div className="main">
          <div className="game-part">
            {bannerImage ? (
              <img
                src={bannerImage}
                alt={`Bannière de ${game.title}`}
                className="banner-image"
              />
            ) : (
              <div className="no-banner">Image de bannière non disponible</div>
            )}
            <h1>{game.title}</h1>
            <h2>{game.studio}</h2>
            <div className="informations-container">
              <div className="informations-left-part">
                <div className="informations">
                  <BadgeInfoIcon />
                  <h3>Informations</h3>
                </div>
                <div className="platform">
                  <PlaystationIcon />
                  <h4>{game.platform}</h4>
                </div>
                <div className="numbersPlayers">
                  <PersonStandingIcon />
                  <h4>
                    {game.numberPlayers} joueur
                    {game.numberPlayers > 1 ? 's' : ''}
                  </h4>
                </div>
                <div className="releaseDate">
                  <CalendarDaysIcon />
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
            <div className="game-images">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <img
                    key={index}
                    src={image.source}
                    alt={`Image du jeu ${game.title} ${index}`}
                    className="game-image"
                  />
                ))
              ) : (
                <div>Aucune image disponible</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        !error && <div>Chargement des données...</div>
      )}
    </main>
  );
};

export default Game;

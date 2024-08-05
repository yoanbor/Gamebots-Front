const RegisterAndLoginLeftPart = () => {
  return (
    <div className="left-part">
      <img
        src={'../../public/avatars/AvatarBang.png'}
        id={'avatar-Bangalore'}
        className={'img-avatars'}
        alt="Avatar Bangalor"
      />
      <img
        src={'../../public/avatars/AvatarBlood.png'}
        id={'avatar-Bloodhunt'}
        className={'img-avatars'}
        alt="Avatar Bloodhunt"
      />
      <img
        src={'../../public/avatars/AvatarLifeline.png'}
        id={'avatar-Lifeline'}
        className={'img-avatars'}
        alt="Avatar Lifeline"
      />
      <img
        src={'../../public/avatars/AvatarPath.png'}
        id={'avatar-Pathfinder'}
        className={'img-avatars'}
        alt="Avatar Pathfinder"
      />
      <img
        src={'../../public/Logo.svg'}
        id={'big-logo'}
        className={'img-avatars'}
        alt="logo Gamebots"
      />

      <div className={'msg'} id={'msg-gamebot'}>
        <div className={'img-gamebot'}>
          <img
            src={'../../public/Logo.svg'}
            id={'logo-msg'}
            alt="logo Gamebots"
          />
        </div>
        <div className={'message-gamebot'}>
          <h4>Gamebot</h4>
          <p>Bonjour, en quoi puis-je vous aider ?</p>
        </div>
      </div>

      <div className={'msg'} id={'msg-user'}>
        <div className={'message-user'}>
          <h4>Herobrine</h4>
          <p>Comment économiser ses munitions ?</p>
        </div>
        <div className={'img-user'}>
          <img
            src={'../../public/avatars/AvatarPath.png'}
            id={'logo-msg'}
            alt="Avatar Pathflinder"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterAndLoginLeftPart;

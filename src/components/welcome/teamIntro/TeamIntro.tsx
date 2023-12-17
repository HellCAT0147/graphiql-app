import { ReactNode, useContext } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';

function TeamIntro(): ReactNode {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeTeamTitle, welcomeTeamIntro },
  } = context;

  return (
    <div className="d-flex flex-row m-15 justify-content-center align-items-center">
      <div className="d-flex flex-column">
        <h2 className="text-info">{welcomeTeamTitle}</h2>
        <p>{welcomeTeamIntro}</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center text-center ">
        <a href="https://rs.school/">
          <img src="/logo-rs.svg" alt="logo"></img>
        </a>
        <div className="text-secondary fs-2 "> & RS School</div>
      </div>
    </div>
  );
}

export default TeamIntro;

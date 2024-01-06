import { ReactNode, useContext } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { ImgLink } from '../../elements';

function TeamIntro(): ReactNode {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeTeamTitle, welcomeTeamIntro },
  } = context;

  return (
    <section className="team-intro d-flex flex-row justify-content-center">
      <div className="d-flex flex-column w-50">
        <h2 className="text-secondary">{welcomeTeamTitle}</h2>
        <p>{welcomeTeamIntro}</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <ImgLink href="https://rs.school/" src="/logo-rs.svg" alt="logo" />
        <div className="text-secondary fs-2"> & RS School</div>
      </div>
    </section>
  );
}

export default TeamIntro;

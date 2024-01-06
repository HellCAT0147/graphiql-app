import { ReactNode, useContext, useRef } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';
import { useHoverDirty } from 'react-use';

function TeamIntro(): ReactNode {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeTeamTitle, welcomeTeamIntro },
  } = context;
  const hovered = useRef(null);
  const isHovering = useHoverDirty(hovered);

  return (
    <section className="team-intro d-flex flex-row justify-content-center">
      <div className="d-flex flex-column w-50">
        <h2 className="text-secondary">{welcomeTeamTitle}</h2>
        <p>{welcomeTeamIntro}</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <a
          ref={hovered}
          href="https://rs.school/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/logo-rs.svg"
            alt="logo"
            style={{
              scale: isHovering ? '1.1' : '1.0',
              transition: 'all 0.3s',
            }}
          ></img>
        </a>
        <div className="text-secondary fs-2"> & RS School</div>
      </div>
    </section>
  );
}

export default TeamIntro;

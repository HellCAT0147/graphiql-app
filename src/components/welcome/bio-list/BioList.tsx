import { ReactNode, useContext } from 'react';
import { members } from '../../../constants';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import Bio from '../bio';

const BioList = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeBioContributionsTitle, welcomeBioAboutTitle },
  } = context;

  const { lang } = context;
  return (
    <>
      {members.map((member) => {
        const { id, gh, mail } = member;
        return (
          <Bio
            key={id}
            name={lang[`welcomeMemberName${id}`]}
            location={lang[`welcomeBioLocation${id}`]}
            gh={gh}
            mail={mail}
            impactTitle={welcomeBioContributionsTitle}
            impact={lang[`welcomeBioContribution${id}`]}
            infoTitle={welcomeBioAboutTitle}
            info={lang[`welcomeBioAbout${id}`]}
          />
        );
      })}
    </>
  );
};

export default BioList;

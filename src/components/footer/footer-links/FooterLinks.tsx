import { ReactNode, useContext } from 'react';
import { members } from '../../../constants';
import { LangContext } from '../../../contexts/types';
import { Context } from '../../../contexts';

function FooterLinks(): ReactNode {
  const context: LangContext = useContext<LangContext>(Context);
  const { lang } = context;

  return (
    <div className="d-flex flex-column">
      {members.map((member, index) => {
        return (
          <a
            href={member.gh}
            target="_blank"
            key={member.id}
            className="fs-5 text-decoration-none"
            rel="noreferrer"
          >
            <img src="/icon-gh.svg" alt="github icon " className="px-3" />
            {lang[`welcomeMemberName${index + 1}`]}
          </a>
        );
      })}
    </div>
  );
}

export default FooterLinks;

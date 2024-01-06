import { ReactNode, useContext } from 'react';
import { members } from '../../../constants';
import { LangContext } from '../../../contexts/types';
import { Context } from '../../../contexts';
import { IconLink } from '../../elements';

function FooterLinks(): ReactNode {
  const context: LangContext = useContext<LangContext>(Context);
  const { lang } = context;

  return (
    <div className="d-flex flex-column gap-1">
      {members.map(({ gh, id }) => {
        return (
          <IconLink
            key={id}
            href={gh}
            faCode="fa-brands fa-github"
            text={lang[`welcomeMemberName${id}`]}
          />
        );
      })}
    </div>
  );
}

export default FooterLinks;

import { ReactNode, useContext } from 'react';
import { members } from '../../../constants';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import PersonCard from '../personCard';

const MemberList = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);

  const { lang } = context;
  return (
    <div className="d-flex flex-row m-15 justify-content-center align-items-center p-4">
      {members.map((member) => {
        const { id, pic } = member;
        return (
          <PersonCard
            key={id}
            name={lang[`welcomeMemberName${id}`]}
            pic={pic}
            role={lang[`welcomeMemberRole${id}`]}
          />
        );
      })}
    </div>
  );
};

export default MemberList;

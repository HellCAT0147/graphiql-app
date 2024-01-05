import { ReactNode, useContext } from 'react';
import { members } from '../../../constants';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import PersonCard from '../person-card';

const MemberList = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);

  const { lang } = context;
  return (
    <section className="member-list d-flex flex-row justify-content-between">
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
    </section>
  );
};

export default MemberList;

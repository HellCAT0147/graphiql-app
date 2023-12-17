import { ReactNode, useContext } from 'react';
import { mentors } from '../../../constants';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import PersonCard from '../person-card';

const MentorList = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeThanksTitle, welcomeMentorRole, welcomeMentorDescription },
  } = context;

  const { lang } = context;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center px-3 mt-5">
      <h2 className="text-info mb-3">{welcomeThanksTitle}</h2>
      <div className="d-flex">
        {mentors.map((mentor) => {
          const { id, pic } = mentor;
          return (
            <PersonCard
              key={id}
              name={lang[`welcomeMentorName${id}`]}
              pic={pic}
              role={welcomeMentorRole}
            />
          );
        })}
      </div>
      <div>{welcomeMentorDescription}</div>
    </div>
  );
};

export default MentorList;

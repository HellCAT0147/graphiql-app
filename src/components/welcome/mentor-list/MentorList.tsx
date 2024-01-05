import { ReactNode, useContext } from 'react';
import { mentors } from '../../../constants';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import PersonCard from '../person-card';
import ParagraphJustify from '../paragraph-justify';

const MentorList = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeThanksTitle, welcomeMentorRole, welcomeMentorDescription },
  } = context;

  const { lang } = context;
  return (
    <section className="mentor-list d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-info pb-4">{welcomeThanksTitle}</h2>
      <div className="d-flex flex-row justify-content-between w-100">
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
      <ParagraphJustify content={welcomeMentorDescription} />
    </section>
  );
};

export default MentorList;

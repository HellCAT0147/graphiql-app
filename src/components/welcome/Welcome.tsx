import { ReactNode, useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import ProjectFacts from './project-facts';
import Collab from './collab';
import TeamIntro from './team-intro';
import WelcomeNav from './welcome-nav';
import MemberList from './member-list';
import BioList from './bio-list';
import MentorList from './mentor-list';

const Welcome: React.FC = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeTitle },
  } = context;

  return (
    <section className="welcome">
      <WelcomeNav />
      <article
        className="content container-fluid d-flex flex-column gap-5"
        style={{ maxWidth: 1200, color: '#FFFFFF' }}
      >
        <h1 className="card-title text-center">{welcomeTitle}</h1>
        <TeamIntro />
        <MemberList />
        <ProjectFacts />
        <BioList />
        <Collab />
        <MentorList />
      </article>
    </section>
  );
};

export default Welcome;

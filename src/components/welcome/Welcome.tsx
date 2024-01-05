import { ReactNode, useContext } from 'react';
import { Context } from '../../contexts';
import { LangContext } from '../../contexts/types';
import { EmptyProps } from '../types';
import ProjectFacts from './project-facts';
import Collab from './collab';
import TeamIntro from './team-intro';
import WelcomeNav from './welcome-nav';
import MemberList from './member-list';
import BioList from './bio-list';
import MentorList from './mentor-list';

const Welcome: React.FC<EmptyProps> = (): ReactNode => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeTitle },
  } = context;

  return (
    <section className="welcome">
      <WelcomeNav />
      <article className="content container-fluid" style={{ maxWidth: 1200 }}>
        <h1 className="text-primary text-center">{welcomeTitle}</h1>
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

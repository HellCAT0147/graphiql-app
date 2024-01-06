import { ReactNode, useContext } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';

function ProjectFacts(): ReactNode {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: {
      welcomeProjectFactsTitle,
      welcomeProjectFactsPRs,
      welcomeProjectFactsCommits,
      welcomeProjectFactsBranches,
      welcomeProjectFactsLines,
    },
  } = context;

  return (
    <section className="d-flex flex-column m-15 justify-content-center align-items-center">
      <h2 className="text-secondary"> {welcomeProjectFactsTitle}</h2>
      <div className="d-flex text-center">
        <div className="p-4">
          <h3> {welcomeProjectFactsPRs}</h3>
          <span> 15 </span>
        </div>
        <div className="p-4">
          <h3> {welcomeProjectFactsCommits}</h3>
          <span> 162 </span>
        </div>
        <div className="p-4">
          <h3> {welcomeProjectFactsBranches}</h3>
          <span> 18 </span>
        </div>
        <div className="p-4">
          <h3> {welcomeProjectFactsLines}</h3>
          <span> ~14k </span>
        </div>
      </div>
    </section>
  );
}

export default ProjectFacts;

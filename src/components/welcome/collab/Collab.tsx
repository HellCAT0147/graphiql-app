import { ReactNode, useContext } from 'react';
import { Context } from '../../../contexts';
import { LangContext } from '../../../contexts/types';

function Collab(): ReactNode {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeCollaborationTitle, welcomeCollaborationDescription },
  } = context;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center px-3">
      <h2 className="text-secondary pb-4"> {welcomeCollaborationTitle}</h2>
      <p className="text-center">{welcomeCollaborationDescription}</p>
    </div>
  );
}

export default Collab;

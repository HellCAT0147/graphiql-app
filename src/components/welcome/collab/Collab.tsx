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
      <h2 className="text-info"> {welcomeCollaborationTitle}</h2>
      <div>{welcomeCollaborationDescription}</div>
    </div>
  );
}

export default Collab;

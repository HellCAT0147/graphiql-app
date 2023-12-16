import { ReactNode } from 'react';

function Collab({ title, text }: { title: string; text: string }): ReactNode {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center px-3">
      <h2 className="text-info"> {title}</h2>
      <div>{text}</div>
    </div>
  );
}

export default Collab;

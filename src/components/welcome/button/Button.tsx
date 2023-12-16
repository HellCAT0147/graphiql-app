import { ReactNode } from 'react';

function Button({ text, link }: { text: string; link: string }): ReactNode {
  return (
    <a href={link}>
      <button className="btn btn-secondary my-2 my-sm-0 mx-3">{text}</button>
    </a>
  );
}

export default Button;

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

function Button({ text, link }: { text: string; link: string }): ReactNode {
  return (
    <Link to={link}>
      <button className="btn btn-secondary my-2 my-sm-0">{text}</button>
    </Link>
  );
}

export default Button;

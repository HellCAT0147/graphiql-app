import { ReactNode } from 'react';

function IconLink({
  href,
  faCode,
}: {
  href: string;
  faCode: string;
}): ReactNode {
  return (
    <a
      className="btn btn-info p-1 d-flex"
      style={{ textDecoration: 'none', width: '28px', height: '28px' }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <i className={`fs-5 ${faCode} align-self-center`}></i>
    </a>
  );
}

export default IconLink;

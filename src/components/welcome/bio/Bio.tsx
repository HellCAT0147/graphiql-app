import { ReactNode } from 'react';

function Bio({
  name,
  location,
  gh,
  mail,
  impactTitle,
  impact,
  infoTitle,
  info,
}: {
  name: string;
  location: string;
  gh: string;
  mail: string;
  impactTitle: string;
  impact: string;
  infoTitle: string;
  info: string;
}): ReactNode {
  return (
    <div className="d-flex m-5 justify-content-center align-self-center">
      <div className="d-flex flex-column m-4 col ">
        <div className="fs-3 mb-3 text-info">{name}</div>
        <div className="fs-4">{impactTitle}</div>
        <div>{impact}</div>
      </div>
      <div className="d-flex flex-column m-4 col">
        <div className="d-flex justify-content-between mb-3">
          <div>
            <a className="icon-link" href={gh}>
              <img src="/icon-gh.svg" alt="GitHub"></img>
            </a>
            <a className="icon-link" href={mail}>
              <img src="/icon-mail.svg" alt="GitHub"></img>
            </a>
          </div>
          <div>{location}</div>
        </div>
        <div className="fs-4">{infoTitle}</div>
        <div>{info}</div>
      </div>
    </div>
  );
}

export default Bio;

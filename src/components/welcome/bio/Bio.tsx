import { ReactNode } from 'react';
import ParagraphJustify from '../paragraph-justify';

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
    <article className="bio d-flex justify-content-center align-self-center gap-4">
      <div className="d-flex flex-column col ">
        <h2 className="fs-3 text-primary">{name}</h2>
        <h4 className="fs-4">{impactTitle}</h4>
        <ParagraphJustify content={impact} />
      </div>
      <div className="d-flex flex-column col">
        <div className="d-flex justify-content-between mb-3">
          <div>
            <a className="icon-link" href={gh} target="_blank" rel="noreferrer">
              <img src="/icon-gh.svg" alt="GitHub"></img>
            </a>
            <a
              className="icon-link"
              href={mail}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icon-mail.svg" alt="GitHub"></img>
            </a>
          </div>
          <p>{location}</p>
        </div>
        <h4 className="fs-4">{infoTitle}</h4>
        <ParagraphJustify content={info} />
      </div>
    </article>
  );
}

export default Bio;

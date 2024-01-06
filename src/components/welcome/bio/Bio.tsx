import { ReactNode } from 'react';
import { IconLink, ParagraphJustify } from '../../elements';

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
        <ParagraphJustify>{impact}</ParagraphJustify>
      </div>
      <div className="d-flex flex-column col">
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex gap-1">
            <IconLink href={gh} faCode="fa-brands fa-github" />
            <IconLink href={mail} faCode="fa-solid fa-at" />
          </div>
          <p className="mb-0">{location}</p>
        </div>
        <h4 className="fs-4">{infoTitle}</h4>
        <ParagraphJustify>{info}</ParagraphJustify>
      </div>
    </article>
  );
}

export default Bio;

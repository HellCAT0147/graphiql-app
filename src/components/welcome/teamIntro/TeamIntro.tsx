import { ReactNode } from 'react';

function TeamIntro({
  title,
  text,
}: {
  title: string;
  text: string;
}): ReactNode {
  return (
    <div className="d-flex flex-row m-15 justify-content-center align-items-center">
      <div className="d-flex flex-column">
        <h2 className="text-info">{title}</h2>
        <p>{text}</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center text-center ">
        <a href="https://rs.school/">
          <img src="/logo-rs.svg" alt="logo"></img>
        </a>
        <div className="text-secondary fs-2 "> & RS School</div>
      </div>
    </div>
  );
}

export default TeamIntro;

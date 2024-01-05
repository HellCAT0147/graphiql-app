import { ReactNode } from 'react';

function PersonCard({
  name,
  pic,
  role,
}: {
  name: string;
  pic: string;
  role: string;
}): ReactNode {
  return (
    <article className="d-flex flex-column text-center p-4 align-items-center">
      <img
        className="rounded-circle pb-3"
        src={pic}
        alt={name}
        style={{ maxWidth: 200, maxHeight: 200 }}
      ></img>
      <p className="fs-3 mb-0"> {name}</p>
      <p className="fs-4 mb-0"> {role}</p>
    </article>
  );
}

export default PersonCard;

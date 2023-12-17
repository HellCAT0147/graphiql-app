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
    <div className="d-flex flex-column text-center p-4 align-items-center">
      <img
        className="rounded-circle"
        src={pic}
        alt={name}
        style={{ maxWidth: 200, maxHeight: 200 }}
      ></img>
      <div className="fs-3"> {name}</div>
      <div className="fs-4"> {role}</div>
    </div>
  );
}

export default PersonCard;

import { ReactNode } from 'react';

function ProjectFacts({
  title,
  pullrequests,
  commits,
  branches,
  lines,
}: {
  title: string;
  pullrequests: string;
  commits: string;
  branches: string;
  lines: string;
}): ReactNode {
  return (
    <div className="d-flex flex-column m-15 justify-content-center align-items-center">
      <h2 className="text-info"> {title}</h2>
      <div className="d-flex text-center">
        <div className="p-4">
          <h3> {pullrequests}</h3>
          <span> 65 </span>
        </div>
        <div className="p-4">
          <h3> {commits}</h3>
          <span> 450 </span>
        </div>
        <div className="p-4">
          <h3> {branches}</h3>
          <span> 62 </span>
        </div>
        <div className="p-4">
          <h3> {lines}</h3>
          <span> ~30k </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectFacts;

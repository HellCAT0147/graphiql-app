import { ReactNode, useRef } from 'react';
import { useHoverDirty } from 'react-use';

function IconLink({
  href,
  faCode,
  text,
}: {
  href: string;
  faCode: string;
  text?: string;
}): ReactNode {
  const hovered = useRef(null);
  const isHovering = useHoverDirty(hovered);
  return (
    <a
      className="d-flex"
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <i
        className={`btn btn-info p-1 d-flex fs-6 ${faCode} align-self-center`}
      ></i>
      {text && (
        <p
          ref={hovered}
          className="m-0 ps-2 align-self-end transition"
          style={{
            color: isHovering ? '#3498db' : '#FFFFFF',
            lineHeight: '100%',
          }}
        >
          {text}
        </p>
      )}
    </a>
  );
}

export default IconLink;

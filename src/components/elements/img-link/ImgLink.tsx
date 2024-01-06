import { ReactNode, useRef } from 'react';
import { useHoverDirty } from 'react-use';

function ImgLink({
  href,
  src,
  alt,
  classLink,
}: {
  href: string;
  src: string;
  alt: string;
  classLink?: string;
}): ReactNode {
  const hovered = useRef(null);
  const isHovering = useHoverDirty(hovered);
  return (
    <a
      ref={hovered}
      className={classLink}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="transition"
        src={src}
        alt={alt}
        style={{
          scale: isHovering ? '1.1' : '1.0',
        }}
      />
    </a>
  );
}

export default ImgLink;

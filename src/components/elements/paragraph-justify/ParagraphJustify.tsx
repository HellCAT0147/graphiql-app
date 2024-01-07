import { ReactNode } from 'react';

function ParagraphJustify({ children }: { children: ReactNode }): ReactNode {
  return <p style={{ textAlign: 'justify' }}>{children}</p>;
}

export default ParagraphJustify;

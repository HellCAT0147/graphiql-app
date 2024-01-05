import { ReactNode } from 'react';

function ParagraphJustify({ content }: { content: string }): ReactNode {
  return <p style={{ textAlign: 'justify' }}>{content}</p>;
}

export default ParagraphJustify;

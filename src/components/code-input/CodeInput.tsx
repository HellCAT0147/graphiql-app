import CodeMirror from '@uiw/react-codemirror';
import { okaidiaInit } from '@uiw/codemirror-theme-okaidia';
import { tags as t } from '@lezer/highlight';
import { langs } from '@uiw/codemirror-extensions-langs';
import { ReactNode } from 'react';
import { CodeInputProps } from '../types';

const CodeInput: React.FC<CodeInputProps> = ({ atr }): ReactNode => {
  const { value, isReadOnly, callback } = atr;
  return (
    <CodeMirror
      value={value}
      readOnly={isReadOnly}
      theme={okaidiaInit({
        settings: {
          background: '#1a0933',
          gutterBackground: '#1a0933',
          fontFamily: 'monospace',
        },
        styles: [{ tag: t.bracket, color: '#ea39b8' }],
      })}
      extensions={[langs.tsx()]}
      onChange={(value) => {
        callback(value);
      }}
    />
  );
};

export default CodeInput;

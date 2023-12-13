import React from 'react';
import { EN } from './languages';
import { LangContext } from './types';

export const Context: React.Context<LangContext> =
  React.createContext<LangContext>({
    lang: EN,
    setLang: (): void => {},
  });

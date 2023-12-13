export interface Languages {
  [key: string]: string;
}

export type ReactSet = (value: React.SetStateAction<Languages>) => void;

export interface LangContext {
  lang: Languages;
  setLang: ReactSet;
}

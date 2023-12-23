import { HistoryStep, SchemaType } from '../../components/types';
import { RootState } from '../store';

export type OptionsMethod = string | undefined;
export type OptionsHeaders =
  | Headers
  | string[][]
  | Record<string, string | undefined>
  | undefined;

export type SelectString = (state: RootState) => string;
export type SelectBoolean = (state: RootState) => boolean;
export type SelectHeaders = (state: RootState) => OptionsHeaders;
export type SelectMethod = (state: RootState) => OptionsMethod;
export type SelectScreen = (state: RootState) => AllTypes | SchemaType | string;

export interface ResponseApi {
  data: string;
}

export interface MessageStore {
  error: string;
}

export interface InputsStore {
  url: string;
  query: string;
  currentTools: string;
  headers: string;
  variables: string;
}

export interface VisibilityStore {
  tools: boolean;
  docs: boolean;
}

export interface InputsGroupAttributes {
  atr: {
    id: string;
    group: string;
    type: string;
    value: string;
    classInput: string;
    classLabel: string;
  };
}

export interface TypeProps {
  type: SchemaType | { name: string } | null;
  isRoot?: true;
}

export interface DocsStore {
  mainData: AllTypes;
  currentData: AllTypes | SchemaType | string;
  history: HistoryStep[];
}

export interface AllTypes {
  types: SchemaType[];
  rootTypes: {
    query: { name: string } | null;
    mutation: { name: string } | null;
  };
}

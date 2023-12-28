import { HistoryStep, SchemaItem } from '../../components/types';
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
export type SelectPage = (state: RootState) => DocsPage;
export type SelectMainTypes = (state: RootState) => AllTypes;
export type SelectSteps = (state: RootState) => HistoryStep[];

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

export interface SchemaItemProps {
  data: SchemaItem;
  isRoot?: true;
}

export interface DocsStore {
  mainData: AllTypes;
  currentData: DocsPage;
  history: HistoryStep[];
}

export type DocsPage = AllTypes | SchemaItem;

export interface AllTypes {
  types: SchemaItem[];
  rootTypes: {
    query: SchemaItem | null;
    mutation: SchemaItem | null;
  };
}

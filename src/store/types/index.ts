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
}

export interface VisibilityStore {
  tools: boolean;
  docs: boolean;
}

import { RootState } from '../store';

export type QueryMethod = string | undefined;
export type QueryHeaders =
  | Headers
  | string[][]
  | Record<string, string | undefined>
  | undefined;

export type SelectString = (state: RootState) => string;
export type SelectHeaders = (state: RootState) => QueryHeaders;
export type SelectMethod = (state: RootState) => QueryMethod;

export interface ResponseApi {
  data: string;
}

export interface MessageState {
  error: string;
}

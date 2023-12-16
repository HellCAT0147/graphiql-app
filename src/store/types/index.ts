import { RootState } from '../store';

export type SelectString = (state: RootState) => string;

export interface ResponseApi {
  data: string;
}

export interface MessageState {
  error: string;
}

import { FetchArgs } from '@reduxjs/toolkit/query';

export const Base: FetchArgs = {
  url: 'https://rickandmortyapi.com/graphql',
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: '',
};

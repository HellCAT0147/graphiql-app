import { FetchArgs } from '@reduxjs/toolkit/query';

export const Base: FetchArgs = {
  url: 'https://rickandmortyapi.com/graphql',
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: '',
};

export const ForbiddenHeaders = [
  `Accept-Charset`,
  `Accept-Encoding`,
  `Access-Control-Request-Headers`,
  `Access-Control-Request-Method`,
  `Connection`,
  `Content-Length`,
  `Cookie`,
  `Cookie2`,
  `Date`,
  `DNT`,
  `Expect`,
  `Host`,
  `Keep-Alive`,
  `Origin`,
  `Referer`,
  `Set-Cookie`,
  `TE`,
  `Trailer`,
  `Transfer-Encoding`,
  `Upgrade`,
  `Via`,
  `proxy-`,
  `sec-`,
  `X-HTTP-Method`,
  `X-HTTP-Method-Override`,
  `X-Method-Override`,
];

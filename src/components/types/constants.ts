export enum ApiConstants {
  baseUrl = 'https://rickandmortyapi.com/graphql',
  querySchema = `{ __schema { types { name } } }`,
  queryRequest = `query { characters { info { count pages next prev } } }`,
}

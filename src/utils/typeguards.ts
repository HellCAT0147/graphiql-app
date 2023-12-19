export function isError(obj: unknown): obj is Error {
  if (obj instanceof Error) return true;
  return false;
}

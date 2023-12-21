export function isError(obj: unknown): obj is Error {
  if (obj instanceof Error) return true;
  return false;
}

export function isHTMLInputElement(obj: unknown): obj is HTMLInputElement {
  return obj instanceof HTMLInputElement;
}

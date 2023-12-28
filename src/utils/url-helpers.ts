export function areUrlsEqual(prevUrl: string, nextUrl: string): boolean {
  if (prevUrl === nextUrl) return true;
  if (`${prevUrl}/` === nextUrl) return true;
  if (prevUrl === `${nextUrl}/`) return true;
  return false;
}

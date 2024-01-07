export function areUrlsEqual(prevUrl: string, nextUrl: string): boolean {
  if (
    prevUrl === nextUrl ||
    `${prevUrl}/` === nextUrl ||
    prevUrl === `${nextUrl}/`
  )
    return true;
  return false;
}

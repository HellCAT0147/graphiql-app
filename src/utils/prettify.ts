function onTrimElements(array: string[]): string[] {
  return array.map((elem) => elem.trim());
}

function filterWithoutSpaces(array: string[]) {
  return array.filter((elem) => elem);
}

function prepareElemsWithArgs(array: string[]) {
  return array.map((elem) =>
    filterWithoutSpaces(onTrimElements(elem.split('')))
      .join('')
      .split(':')
      .join(': ')
  );
}

export function onPrettify(string: string) {
  let prettiedString = '';
  let indent: number = 0;
  const space: string = ' ';
  const trimmedByOpenBracket = onTrimElements(string.split('{'));
  const openArray = trimmedByOpenBracket.slice(0, -1);
  const countBrackets = openArray.length;
  const closeArray = trimmedByOpenBracket[countBrackets].split('}');
  const innerArray = filterWithoutSpaces(
    onTrimElements(closeArray[0].split(' '))
  );

  const preparedOpenArray = prepareElemsWithArgs(openArray);
  preparedOpenArray.forEach((elem) => {
    prettiedString += `\n${space.repeat(indent)}${elem} {`;
    indent += 2;
  });
  innerArray.forEach(
    (elem) => (prettiedString += `\n${space.repeat(indent)}${elem}`)
  );
  for (let i = 1; i <= countBrackets; i++) {
    indent -= 2;
    prettiedString += `\n${space.repeat(indent)}}`;
  }

  return prettiedString.trim();
}

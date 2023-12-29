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

export function onPrettify(string: string): string {
  let prettifiedString = '';
  let indent: number = 0;
  const space: string = ' ';
  const trimmedByOpenBracket = onTrimElements(string.split('{'));
  const openArray = trimmedByOpenBracket.slice(0, -1);
  if (openArray[0] === 'query') openArray.splice(0, 1, '');
  const countBrackets = openArray.length;
  const closeArray = trimmedByOpenBracket[countBrackets].split('}');
  const innerArray = filterWithoutSpaces(
    onTrimElements(closeArray[0].split(' '))
  );

  const preparedOpenArray = prepareElemsWithArgs(openArray);
  preparedOpenArray.forEach((elem) => {
    prettifiedString += `\n${space.repeat(indent)}${elem} {`;
    indent += 2;
  });
  innerArray.forEach(
    (elem) => (prettifiedString += `\n${space.repeat(indent)}${elem}`)
  );
  for (let i = 1; i <= countBrackets; i++) {
    indent -= 2;
    prettifiedString += `\n${space.repeat(indent)}}`;
  }

  return prettifiedString.trim();
}

interface CloseBrackets {
  [key: string]: string;
}

const openBrackets = ['(', '{'];
const closeBrackets: CloseBrackets = {
  [')']: '(',
  ['}']: '{',
};
const brackets = ['(', ')', '{', '}'];

function prepareBrackets(query: string): string {
  return query
    .split('')
    .filter((char) => brackets.includes(char))
    .join('');
}

export function isValidBrackets(query: string): boolean {
  const stackBrackets: string[] = [];
  const brackets = prepareBrackets(query);

  for (const bracket of brackets) {
    if (openBrackets.includes(bracket)) {
      stackBrackets.push(bracket);
    } else {
      if (!stackBrackets.length) {
        return false;
      }

      const lastBracket = stackBrackets[stackBrackets.length - 1];
      if (closeBrackets[bracket] === lastBracket) {
        stackBrackets.pop();
      } else {
        return false;
      }
    }
  }

  return !stackBrackets.length;
}

export function isValidSyntax(query: string): boolean {
  //TODO if required  add options validations
  return !query.split('{')[0];
}

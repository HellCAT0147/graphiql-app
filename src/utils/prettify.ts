function prepareQuery(string: string): string {
  let result = '';
  let prevSymbol = '';
  let lastSymbolIsBracket = false;

  for (let char of string) {
    if (char.trim()) {
      if (
        prevSymbol === ' ' &&
        !brackets.includes(char) &&
        !lastSymbolIsBracket
      ) {
        char = ' ' + char;
      }
      if (brackets.includes(char)) {
        lastSymbolIsBracket = true;
      } else {
        lastSymbolIsBracket = false;
      }
      prevSymbol = char.trim();
      result += char;
    } else {
      prevSymbol = ' ';
    }
  }

  return result;
}

export function onPrettify(string: string): string {
  const preparedQuery: string = prepareQuery(string);
  let prettifiedString = '';
  let prevSymbol = '';
  let lastBracket = '';
  let indent = 0;
  let isBlockClosed = true;
  const space: string = ' ';
  for (const char of preparedQuery) {
    if (char === '(') {
      isBlockClosed = false;
    } else if (char === ')') {
      isBlockClosed = true;
    }

    if (char === '{' && isBlockClosed) {
      prettifiedString += `${space}${char}`;
      indent += 2;
    } else if (char === '{') {
      prettifiedString += `${space}${char}`;
    } else if (prevSymbol === '{' && isBlockClosed) {
      prettifiedString += `\n${space.repeat(indent)}${char}`;
    } else if (char === '}' && isBlockClosed) {
      indent -= 2;
      prettifiedString += `\n${space.repeat(indent)}${char}`;
    } else if (prevSymbol === '}' && isBlockClosed && char !== ')') {
      prettifiedString += `\n${space.repeat(indent)}${char}`;
    } else {
      prettifiedString += char;
    }

    if (lastBracket === '{' && char === space && isBlockClosed) {
      prettifiedString += `\n${space.repeat(indent)}${char.trim()}`;
    }

    prevSymbol = char;

    if (brackets.includes(char)) {
      lastBracket = char;
    }
  }

  const trimmedQuery = prettifiedString.trim();
  const operationName = searchOperationName(trimmedQuery);
  if (!operationName && trimmedQuery.split(' ')[0] === 'query') {
    return trimmedQuery.split('query ')[1];
  }

  return trimmedQuery;
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

function searchOperationName(query: string): string {
  let operationName = '';
  const firstRoundBracket: number = query.indexOf('(');
  const firstCurlyBracket: number = query.indexOf('{');
  const positionFirstBracket: number =
    firstRoundBracket !== -1 && firstRoundBracket < firstCurlyBracket
      ? firstRoundBracket
      : firstCurlyBracket;
  if (firstRoundBracket && firstCurlyBracket)
    operationName = query.slice(0, positionFirstBracket).split(' ')[1];
  return operationName;
}

export function getOperationName(query: string): string {
  let operationName = '';
  if (isValidBrackets(query)) {
    const prettifiedQuery = onPrettify(query);
    operationName = searchOperationName(prettifiedQuery);
  } else {
    return operationName;
  }

  return operationName;
}

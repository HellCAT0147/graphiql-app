import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs, Options } from '../../../store/reducers';

import { EmptyProps } from '../../types';

const ControlPanel: React.FC<EmptyProps> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const queryInput = useAppSelector(Inputs.query.select);
  const variablesInput = useAppSelector(Inputs.variables.select);
  const headersInput = useAppSelector(Inputs.headers.select);

  function onGetData() {
    const newBody = JSON.stringify({
      query: queryInput,
      variables: variablesInput,
    });
    //TODO catch errors for incorrect headers or variables
    dispatch(Options.body.set(newBody));
    dispatch(Options.headers.set(headersInput ? JSON.parse(headersInput) : {}));
  }

  function onTrimElements(array: string[]): string[] {
    return array.map((elem) => elem.trim());
  }

  function prepareElemsWithArgs(array: string[]) {
    return array.map((elem) =>
      onTrimElements(elem.split(''))
        .filter((elem) => elem)
        .join('')
        .split(':')
        .join(': ')
    );
  }

  function onPrettifyArray(string: string) {
    let prettiedString = '';
    let indent: number = 0;
    const space: string = ' ';
    const array = string.split('{');
    const trimmedByOpenBracket = onTrimElements(array);
    const openArr = trimmedByOpenBracket.slice(0, -1);
    const countBrackets = trimmedByOpenBracket.length - 1;
    const closeArray = trimmedByOpenBracket[countBrackets].split('}');
    const innerArray = onTrimElements(closeArray[0].split(' ')).filter(
      (elem) => elem
    );

    const preparedOpenArr = prepareElemsWithArgs(openArr);
    preparedOpenArr.forEach((elem) => {
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

  function onPrettify() {
    dispatch(Inputs.query.set(onPrettifyArray(queryInput)));
  }

  return (
    <article>
      <button
        type="button"
        className="btn btn-secondary d-block mb-3"
        onClick={onGetData}
        style={{ minWidth: 50, minHeight: 50 }}
      >
        <i className={`fs-2 px-1 fa-sharp fa-solid fa-caret-right`} />
      </button>
      <button
        type="button"
        className="btn btn-outline-primary d-block"
        onClick={onPrettify}
        style={{ minWidth: 50, minHeight: 50 }}
      >
        <i className={`fs-5 py-1 fa-sharp fa-solid fa-broom-ball`} />
      </button>
    </article>
  );
};

export default ControlPanel;

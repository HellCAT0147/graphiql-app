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

  function onPrettifyArray(string: string) {
    let prettiedString = '';
    let indent: number = 0;
    const space: string = ' ';
    const array = string.split(' ');
    array.forEach((element) => {
      let elementWithIndent = `\n${space.repeat(indent)}${element}`;
      switch (element) {
        case '{':
          indent += 2;
          prettiedString += elementWithIndent;
          break;
        case '}':
          indent -= 2;
          elementWithIndent = `\n${space.repeat(indent)}${element}`;
          prettiedString += elementWithIndent;

          break;

        default:
          prettiedString += elementWithIndent;
      }
    });

    return prettiedString;
  }

  function onPrettify() {
    onPrettifyArray(queryInput);
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

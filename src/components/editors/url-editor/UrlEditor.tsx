import { FormEvent, useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Inputs, Options } from '../../../store/reducers';
import { Context } from '../../../contexts';

import { LangContext } from '../../../contexts/types';
import { EmptyProps } from '../../types';

const UrlEditor: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { setApi },
  } = context;

  const dispatch = useAppDispatch();
  const urlApi = useAppSelector(Options.url.select);
  const url = useAppSelector(Inputs.url.select);

  const onSetUrl = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(Options.url.set(url));
  };

  return (
    <div className="card-header d-flex justify-content-between">
      <h5>{urlApi}</h5>
      <form
        className="input-group mb-3"
        style={{ maxWidth: '20rem' }}
        onSubmit={(e) => onSetUrl(e)}
      >
        <input
          type="text"
          className="form-control"
          placeholder="enter the URL..."
          onChange={(e) => dispatch(Inputs.url.set(e.target.value))}
          value={url}
        />
        <button className="btn btn-primary" type="submit" id="set-url">
          {setApi}
        </button>
      </form>
    </div>
  );
};

export default UrlEditor;

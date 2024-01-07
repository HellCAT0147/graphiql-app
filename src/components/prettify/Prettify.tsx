import { ReactNode } from 'react';
import { PrettifyProps } from '../types';
import { useAppDispatch } from '../../store/hooks';
import { Inputs } from '../../store/reducers';
import CodeInput from '../code-input';

const Prettify: React.FC<PrettifyProps> = ({ data }): ReactNode => {
  const dispatch = useAppDispatch();
  const { className, width, title, value, isReadOnly } = data;
  return (
    <section className={className} style={{ width: `${width}` }}>
      <h6 className="card-header d-flex justify-content-between">{title}</h6>
      <div className="card-body">
        <div className="form-group">
          <CodeInput
            atr={{
              value,
              isReadOnly,
              callback: (value) => dispatch(Inputs.query.set(value)),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Prettify;

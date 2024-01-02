import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { Visibility } from '../../../../store/reducers';
import { ButtonProps } from '../../../types';

const Button: React.FC<ButtonProps> = ({ isLoading, isError }): JSX.Element => {
  const isDocsVisible: boolean = useAppSelector(Visibility.docs.select);
  const dispatch = useAppDispatch();

  const onToggleDocsVisible = (): void => {
    dispatch(Visibility.docs.set(!isDocsVisible));
  };

  return isLoading ? (
    <button
      className="btn btn-info position-absolute start-0 px-2 z-1"
      type="button"
      disabled
    >
      <span
        className="spinner-border spinner-border-sm p-2"
        role="status"
        aria-hidden="true"
      ></span>
      <span className="sr-only">Loading...</span>
    </button>
  ) : isError ? (
    <button
      type="button"
      className="btn btn-danger position-absolute start-0 px-2 z-1"
    >
      <i className="fs-4 fa-sharp fa-solid fa-triangle-exclamation"></i>
    </button>
  ) : (
    <button
      type="button"
      className="btn btn-info position-absolute start-0 px-2 z-1"
      onClick={onToggleDocsVisible}
    >
      <i className="fs-3 fa-sharp fa-solid fa-book-bookmark"></i>
    </button>
  );
};

export default Button;

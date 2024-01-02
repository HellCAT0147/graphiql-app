import { LoaderProps } from '../../../types';

const Loader: React.FC<LoaderProps> = ({ margin }): JSX.Element => {
  return (
    <section
      className={`mt-${margin ? margin : '5'} d-flex justify-content-center`}
      style={{ width: '100%' }}
    >
      <div
        className="spinner-grow text-info"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </section>
  );
};

export default Loader;

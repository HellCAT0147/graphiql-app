import { ReactNode } from 'react';
import { LoaderProps, LoaderStyles } from '../../../types';

const Loader: React.FC<LoaderProps> = ({ isInCenter }): ReactNode => {
  const styles: LoaderStyles = { width: '100%' };
  if (isInCenter) styles.height = '100vh';
  return (
    <section
      className={`${
        isInCenter ? 'align-items-center' : 'mt-5'
      } d-flex justify-content-center`}
      style={styles}
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

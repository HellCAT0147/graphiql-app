const Loader: React.FC = (): JSX.Element => {
  return (
    <div className="mt-5 d-flex justify-content-center">
      <div
        className="spinner-grow text-info"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
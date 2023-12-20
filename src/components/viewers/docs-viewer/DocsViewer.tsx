const DocsViewer: React.FC = (): JSX.Element => {
  return (
    <aside className="position-relative">
      <button
        type="button"
        className="btn btn-info position-absolute start-0 px-2 z-1"
      >
        <i className="fs-3 fa-sharp fa-solid fa-book-tanakh"></i>
      </button>
      <div
        className="card border-info mb-3"
        style={{ maxWidth: '10rem', minHeight: '90vh' }}
      >
        <div className="card-header text-end">DOCS</div>
        <div className="card-body">
          <h4 className="card-title">Info card title</h4>
          <p className="card-text">
            {`Some quick example text to build on the card title and make up the
            bulk of the card's content.`}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default DocsViewer;

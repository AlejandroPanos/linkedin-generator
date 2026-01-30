import "./Loader.css";

const Loader = (): React.JSX.Element => {
  return (
    <div className="loader-outter" role="status" aria-live="polite">
      <div className="loader-inner"></div>
    </div>
  );
};

export default Loader;

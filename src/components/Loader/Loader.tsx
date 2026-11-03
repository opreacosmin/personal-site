import './Loader.scss';

interface LoaderProps {
  message: string;
}

function Loader({ message }: LoaderProps) {
  return (
    <div className="custom-loader">
      <span className="loader"></span>
      <p>{message}</p>
    </div>
  );
}

export default Loader;

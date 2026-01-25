import "./PageHeader.css";

interface PageHeader {
  title: string;
  text: string;
}

const PageHeader = ({ title, text }: PageHeader): React.JSX.Element => {
  return (
    <>
      <div className="content-wrapper">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default PageHeader;

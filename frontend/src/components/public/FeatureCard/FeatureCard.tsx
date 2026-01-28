import "./FeatureCard.css";

interface CardProps {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: CardProps): React.JSX.Element => {
  return (
    <>
      <div className="card-wrapper">
        <div className="w-full flex-row-gap-2">
          {icon}
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default FeatureCard;

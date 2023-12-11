import { EmptyProps } from "../types";

const WelcomePage: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <div className="welcome">
      <h1 className="text-info">Welcome Page</h1>
    </div>
  );
};

export default WelcomePage;

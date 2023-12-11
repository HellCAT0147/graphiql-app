import { useContext } from "react";
import { Context } from "../../contexts";
import { LangContext } from "../../contexts/types";
import { EmptyProps } from "../types";

const WelcomePage: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);

  return (
    <div className="welcome">
      <h1 className="text-info">{context.lang.welcomeTitle}</h1>
    </div>
  );
};

export default WelcomePage;

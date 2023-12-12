import { useContext } from "react";
import { Context } from "../../contexts";
import { LangContext } from "../../contexts/types";
import { EmptyProps } from "../types";

const WelcomePage: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { welcomeTitle },
  } = context;

  return (
    <div className="welcome">
      <h1 className="text-info">{welcomeTitle}</h1>
    </div>
  );
};

export default WelcomePage;

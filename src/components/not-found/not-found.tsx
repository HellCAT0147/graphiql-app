import { useContext } from "react";
import { Context } from "../../contexts";
import { LangContext } from "../../contexts/types";
import { EmptyProps } from "../../components/types";
import styles from "./not-found.module.scss";

const NotFoundPage: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useContext<LangContext>(Context);
  const {
    lang: { notFoundTitle, notFoundText },
  } = context;

  return (
    <div className={styles.notFound}>
      <h1 className="text-warning">{notFoundTitle}</h1>
      <p className="text-warning">{`(${notFoundText})`}</p>
    </div>
  );
};

export default NotFoundPage;

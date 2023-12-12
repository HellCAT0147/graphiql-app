import { BrowserRouter } from "react-router-dom";

import { Context, useCreateContext } from "../../contexts";
import { LangContext } from "../../contexts/types";
import ErrorBoundary from "../error-boundary";
import { AppRouter } from "../router";

import { EmptyProps } from "../types";

const App: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useCreateContext();

  return (
    <Context.Provider value={context}>
      <ErrorBoundary>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ErrorBoundary>
    </Context.Provider>
  );
};

export default App;

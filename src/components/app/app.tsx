import { Route, Routes } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { Message } from "../../store/reducers/message-slice";

import Main from "../main";
import { NotFoundPage, WelcomePage } from "../pages";
import Layout from "../router/layout";
import { EmptyProps } from "../types";
import { Context, useCreateContext } from "../../contexts";
import { LangContext } from "../../contexts/types";

const App: React.FC<EmptyProps> = (): JSX.Element => {
  const context: LangContext = useCreateContext();
  const messageError: string = useAppSelector(Message.select);

  if (messageError) {
    throw new Error(messageError);
  }

  return (
    <Context.Provider value={context}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="welcome" element={<WelcomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;

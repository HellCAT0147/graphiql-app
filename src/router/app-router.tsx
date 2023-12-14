import { Message } from '../store/reducers/message-slice';
import { Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../store/hooks';
import { Layout } from '.';
import { MainPage, NotFoundPage, WelcomePage } from '../pages';

import { EmptyProps } from '../components/types';
import LoginPage from '../pages/login';

const AppRouter: React.FC<EmptyProps> = (): JSX.Element => {
  const messageError: string = useAppSelector(Message.select);
  if (messageError) {
    throw new Error(messageError);
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;

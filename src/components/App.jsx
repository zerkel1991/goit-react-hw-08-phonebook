import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Contacts } from './pages/ContactsPage/ContactsPage';
// import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route index element={<LoginPage />} />
          <Route path="*" element={<LoginPage to="/login" replace />} />
          <Route path="contacts" element={<Contacts />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;

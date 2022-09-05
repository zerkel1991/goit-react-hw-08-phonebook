import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LoginPage } from './pages/LoginPage/LoginPage';
import ContactForm from './ContactForm/ContactForm';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="register" element={<RegisterPage />} />
          <Route index element={<LoginPage />} />
          <Route path="contacts" element={<ContactForm />} />
          <Route path="*" element={<LoginPage  to='/login' replace/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

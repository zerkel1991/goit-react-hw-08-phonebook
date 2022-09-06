import { Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Contacts } from 'components/pages/ContactsPage/ContactsPage';

export default function PrivateRoute({children}) {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn)

  return isLoggedIn ? <Contacts/> : <Navigate to='/login' />;
}


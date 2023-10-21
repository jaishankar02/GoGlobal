import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const navigate = useNavigate();
const makePostRequest = () => {
    const accessToken = cookies.get('access', { path: '/' });
    if (!accessToken) {
        navigate('/login');
    }

    const tokenData = jwtDecode(accessToken);
    console.log(tokenData);
}

export default makePostRequest;

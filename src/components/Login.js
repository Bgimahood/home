import { useDispatch, useSelector} from 'react-redux';
import { login, logout } from '../features/user';
import {openModal } from '../features/MyModal';
import Account from './Account';
function Login() {
    const dispatch = useDispatch();
    const modal1 = useSelector((modo) => modo.mymodal.value);
    return (
        <>
            <h2> Create an account with us</h2> 
            <hr />
            <button
                className='btn blue'
                onClick={() => {
                dispatch(login({ name: "Muhumuza Jamir", email: 'jamirmuhumuza@gmail.com', contact: '+256 774 058894' }))
            }}>Login</button>
            <button
                className='btn green'
                onClick={() => {
                dispatch(logout())
            }}
            >
                Logout
            </button>
            <button
                className='btn orange'
                onClick={() => {
                    dispatch(openModal())
                }}
            >
                Click here
            </button>
            {modal1 && <Account/>}
        </>
    );
}
export default Login;
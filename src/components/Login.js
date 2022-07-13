import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
import Logo from '../pics/Bulera_logo_New.png';
import User from './User';
import Passworder from './Passworder';


function Login() {  
    const [auth, setAuth] = useState(true);
    return (
        <div style={{ padding: '4em 0 10em 0' }}>
            
            <div className='login' >
                <img src={Logo} alt='alt' />
                <h2>BULERA CORE PTC-HOIMA</h2><span> STUDENTS' PORTAL </span>
                <div className='login-cont'>
                    {auth ? <User setAuth={ setAuth} /> : <Passworder />}    
                </div>
                    
            </div>
        </div>
    );
}

export default Login;
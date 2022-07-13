import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProfile } from '../features/profile';


function Passworder() {
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const dispatch = useDispatch();
    const userData = useSelector((word) => word.profile.value);
    const handleLogin = () => {

        const setData = {
            regNo: userData.regNo,
            password: password
        };
        console.log(setData);
        axios.post('/api/portal/login', setData)
            .then((res) => {
                if (res.data.status === 200) {
                    dispatch(setProfile(res.data.message));
                    console.log(res.data.message);
                }
           
            })
            .catch((error) => {               
                console.log(error.response.data.message);
                setErr(error.response.data.message);
        })
    };
    return (
        <div>
            
            {err === ''
                ? 
                <div style={{color:'green', textAlign:'center',margin:'10px', padding:'10px'}}>
                Welcome <b>{userData.userName  === undefined ? userData.regNo : userData.userName} </b>
                </div>
                :
                <div style={{color:'brown', textAlign:'center', margin:'10px', padding:'10px'}}>
                    {err}
                </div>
            }
            
            <b style={{color:'rgb(11, 96, 165'}}> Enter your password: </b> 
            <input
                type='password'
                value={password}
                onChange={
                    (e) => {
                        setPassword(e.target.value);
                        setErr('');
                    }}
                placeholder="Password"
            />
            <button
                className='btn blue'
                style={{ float: 'right' }}
                onClick={handleLogin}
            >
                Log In
            </button>
        </div>
    );
}

export default Passworder;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProfile } from '../features/profile';
import axios from 'axios';
function Alumni() {
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState('');
    const [regIndex, setRegIndex] = useState({
        regNo:''
    });
    const dispatch = useDispatch();
    const handleSubmit = () => {
        axios.post('/api/v1/login', email)
            .then((res) => {
                setResponse(res.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
        setEmail('');
    };
   
    return (
        <div>
            Interact with your Alumnis from Bulera Teacher Training Institute - the former Bulera Core Primary Teachers' College. <br/>
            <input
                placeholder='cythia@gmail.com'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <button
                className='btn maroon'
                onClick={handleSubmit}
            >
                Submit
            </button>

            
            {response ? 
                <div style={{ padding: "1rem", backgroundColor: "green", color: "white" }}>
                    <b>  click on the like below to verify your email </b> <br/>
                <a href='#'> {response} </a>
                </div>
                : null
            }
            <hr />
            
           
        </div>
    );
}

export default Alumni;
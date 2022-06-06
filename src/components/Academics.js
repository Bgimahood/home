import React, {useState} from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
function Academics() {
    const [user, setUser] = useState({
        name: '',
        contact:''
    });
    const [dance, setDance] = useState('');
    const handleSubmit = () => {
        const newUser = {
            username: user.name,
            password: user.contact
        };
        axios.post("/login", newUser)
            .then((res) => {
                const accessToken = res.data.accessToken;
                const decoded = jwt.verify(accessToken, 'bgimahood');
                setDance(decoded);
                console.log(accessToken,decoded);
            })
            .catch((error) => {
                console.log(error);
            });
    };
   try {
    
   } catch (error) {
       console.log(error);
   }
    
    return (
        <div>
            <p>
                <input
                    type='text'
                    placeholder='User Name'
                    value={user.name}
                    onChange={(event)=>setUser({...user, name:event.target.value})}
                />
            </p>
            <p>
                <input
                    type='text'
                    placeholder='Mobile number'
                    value={user.contact}
                    onChange={(event)=>setUser({...user, contact:event.target.value})}
                />
            </p>
            
            <button
                className='btn blue'
                onClick={handleSubmit}
            >
                Submit
            </button>
            <h3 style={{color:'green'}}> { dance.username}</h3>
            <h3> {dance.password}</h3> 
            <h3> {dance.iat}</h3> 
            
        </div>
    );
}

export default Academics;
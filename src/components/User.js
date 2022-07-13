import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProfile } from '../features/profile';

function User(props) {
    const [username, setUsername] = useState('');
    const [err, setErr] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const regNo = username;
          axios.post('/api/portal/check-reg-no', {regNo})
            .then((res) => {
                console.log(res.data);
                if (res.data.status === 200) {
                     dispatch(setProfile(res.data.content));
                       props.setAuth(false)
                } else {
                    setErr(
                        <div style={{color:'brown', padding:'5px'}}>
                           We coudn't find your Registration Number!
                        </div>
                    )
                }
               
            })
         .catch((error) => {
                console.log(error);
            });       
    }
    return (
        <div>
            {err}
           <b style={{color:'rgb(11, 96, 165'}}>Enter Registration Number: </b> <a href='#'>?</a>
                <input
                     type='text'
                     value={username}
                     onChange={(e)=>setUsername(e.target.value)}
                      placeholder='e.g T100/2000/000'
            />
             <button onClick={handleSubmit} className='btn blue' style={{ float:'right' }}>Next</button>
        </div>
    );
}

export default User;
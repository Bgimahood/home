import React from 'react';
import { Divider } from 'antd';
const  StdProfile=()=> {
    return (
        <div className='tb-wrapper'>
            <Divider dashed/>
           <h2>Set up profile </h2> 
            <Divider dashed />
            <h4>Personal Info </h4>
            <p>
             
            <input
                type='text'
                placeholder='Phone Number'
            />
            <input
                type='text'
                placeholder='Email address'
            />
             <input
                type='text'
                placeholder='Place of Origin'
                />
            <input
                type='date'
                placeholder='Date of Birth'
            />
            </p>
            <h4>Referee/Guardian's Info </h4> 
            <p>
               
                 <input
                type='text'
                placeholder='Full names'
            />
             <input
                type='text'
                placeholder='Contact'
            />
            </p>
            <h4>Education Background Info </h4> 
            <p>
               
                 <input
                type='text'
                placeholder='UCE School'
            />
             <input
                type='text'
                placeholder='Index No.'
            />
            </p>
            <button className='btn green'>Save Changes</button>
            
        </div>
    );
}

export default StdProfile;
import React from 'react';
import { useDispatch } from 'react-redux';
import { stopSpin } from '../features/SpinSlice';

function Spinner() {
    const dispatch = useDispatch();
    return (
        <div className='loader-container' >
            <div className='loader-encl'>
                <div className="loader" onClick={()=>dispatch(stopSpin())}></div>
            </div>
        </div>
    );
}

export default Spinner;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../features/MyModal';
import { WindowsOutlined } from '@ant-design/icons';

const TopNav = () => {
    const [toggle, setToggle] = useState('');
    const [windowWide, setWindowWide] = useState(window.innerWidth);
    const dispatch = useDispatch();
    const modal = useSelector((pop) => pop.mymodal.value);
    const updateWindow = () => {
        setWindowWide(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateWindow);
    });
    useEffect(() => {
        if (windowWide < 564) {
             setToggle(
                <div style={{fontSize:'1.5em', float:'right'}}>                    
                    <WindowsOutlined onClick={() => dispatch(openModal())} />
                </div>
            );
        } else {
             setToggle(
                <div className='togable'>
                    <ul>
                        <li>About Us</li>
                        <li>Academics</li>
                        <li> Admissions</li>
                        <li> Campus Life</li>
                        <li>Alumni</li>
                    </ul>
                </div>
            );
        }
    },[windowWide]);
    
    return (
        <div>
            {toggle}<br />
            
                {modal && 
                    <div className='sideNavig'>
                        <div className='sideNavig-content'>
                        <button
                            onClick={() => dispatch(closeModal())}
                            className='btn'
                        >
                           X
                        </button>                           
                         <ul>
                            <li>About Us</li>
                            <li>Academics</li>
                            <li> Admissions</li>
                            <li> Campus Life</li>
                            <li>Alumni</li>
                            <li>Students' Portal</li>
                        </ul>
                                     
                        </div>                        
                    </div>
                }
            
        </div>
    );
}

export default TopNav;
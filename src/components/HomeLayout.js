import React, {useState, useEffect} from 'react';
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../features/MyModal';
import Footer from './Footer';
import { WindowsOutlined, PhoneFilled } from '@ant-design/icons';
//import BuleraLogo from '../pics/Bulera_logo_New.png';
import { Divider, Row, Col, Space } from 'antd';

const HomeLayout = () => {
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
                 <div style={{ textAlign: 'right',color:'white',fontSize:'1.4em', borderBottom:'3px solid white', backgroundColor:'rgb(6, 125, 194)'}}>  
                     <b>Bulera Core Ptc-Hoima </b>
                     <button
                        className='btn green'
                         onClick={() => dispatch(openModal())}
                     >
                        Menu
                     </button>
                </div>
            );
        } else {
             setToggle(
                 <div className='togable'>                                          
                     <ul>
                        <Link to='/'><li>Home </li></Link> 
                        <Link to='/academics'> <li>Academics</li></Link>
                        <Link to='/admissions'> <li> Admissions</li> </Link>
                       <Link to='/campus-life'> <li> Campus Life</li></Link> 
                         <Link to='/alumni'> <li>Alumni</li> </Link>
                         <Link to='/staff'> <li>Staff</li></Link>
                         <Link to='/student-portal'><li>Students' Portal</li></Link>
                    </ul>
                </div>
            );
        }
    },[windowWide]);
    
    return (
        <div>
            <div className='top-section'>
          
            {toggle}
            </div>
                {modal && 
                    <div className='sideNavig'>
                        <div className='sideNavig-content'>
                        <button
                            onClick={() => dispatch(closeModal())}
                            className='btn green'
                        >
                           X
                        </button>                           
                            <ul>
                                <Link to='/'><li onClick={() => dispatch(closeModal())}>Home </li></Link> 
                                <Link to='/academics'> <li onClick={() => dispatch(closeModal())}>Academics</li></Link>
                                <Link to='/admissions'> <li onClick={() => dispatch(closeModal())}> Admissions</li> </Link>
                                <Link to='/campus-life'> <li onClick={() => dispatch(closeModal())}> Campus Life</li></Link> 
                                <Link to='/alumni'> <li onClick={() => dispatch(closeModal())}>Alumni</li> </Link>
                                <Link to='/staff'> <li onClick={() => dispatch(closeModal())}>Staff</li></Link>
                                <Link to='/student-portal'><li onClick={() => dispatch(closeModal())}>Students' Portal</li></Link>
                        </ul>        
                        </div>                        
                    </div>
            }
            <div className='oulet-home'>
                <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
}

export default HomeLayout;
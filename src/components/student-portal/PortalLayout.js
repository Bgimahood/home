import React, { useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Divider, Space} from 'antd';
import {
    HomeFilled,
    SettingFilled,
    DollarCircleFilled,
    AreaChartOutlined,
    PoweroffOutlined,
    WechatFilled,
    BellFilled,
    SettingOutlined
} from '@ant-design/icons';


function PortalLayout() {
    const userDetails = useSelector((user) => user.profile.value);
    return (
        <div className='portal-layout'>            
            <div className="pages-container">              
                <div className="left-menu">
                    <div className='profile-pic'>
                       <img src={userDetails.profilePic} alt='pPhoto' />
                        <br />
                        
                        <p> <span style={{fontSize:'14px',color:"rgb(22, 54, 0)"}}> {userDetails.userName} </span> <br/>
                            <b> {userDetails.regNo}</b>  | {userDetails.class}
                        </p>   
                        
                    </div> 
                        <ul className='portal-sideMenu'>
                            
                            <Link to='/student-portal/home'>
                                <li> <Space> <HomeFilled style={{ fontSize: '1.5em', padding: '0.3em' }} /> Home </Space></li>
                        </Link>  
                         <Link to='/student-portal/home/payments'>
                                <li> <Space> <DollarCircleFilled style={{ fontSize: '1.5em', padding: '0.3em' }} /> Messages</Space></li>
                            </Link>
                            <Link to='/student-portal/home/myprofile'>
                                <li> <Space> <SettingFilled style={{ fontSize: '1.5em', padding: '0.3em' }} /> Profile </Space></li>
                            </Link>
                            <Link to='/student-portal/home/results'>
                                <li> <Space> <AreaChartOutlined style={{ fontSize: '1.5em', padding: '0.3em' }} /> Results </Space></li>
                            </Link>
                            <Link to='/student-portal/home/payments'>
                                <li> <Space> <DollarCircleFilled style={{ fontSize: '1.5em', padding: '0.3em' }} /> Payments </Space></li>
                        </Link>
                         <Link to='/student-portal/home/payments'>
                                <li> <Space> <DollarCircleFilled style={{ fontSize: '1.5em', padding: '0.3em' }} /> Calendar </Space></li>
                            </Link>
                            <Link to='/student-portal/home/blog-page'>
                                <li> <Space> <WechatFilled style={{ fontSize: '1.5em', padding: '0.3em' }} />  Blog </Space></li>
                            </Link>
                            <Link to='/student-portal'>
                                <li> <Space> <PoweroffOutlined style={{ fontSize: '1.5em', padding: '0.3em' }} /> Log Out</Space> </li>
                            </Link>
                           
                        </ul>
                        
                    </div>
                <div className="right-pages">
                    <div className='top-menu1'>
                            <span>
                                Bulera Core PTC Students' Portal
                            </span>                                 
                        <li><BellFilled style={{ fontSize: '1.4em' }} /></li>
                        <li> <SettingOutlined style={{ fontSize: '1.4em' }} /> </li>
                        <li> <img src={userDetails.profilePic} alt='pPhoto'/></li>
                     
                        <Divider type='vertical'/>
                        <li>{ userDetails.userName}</li>
                    </div>
                    <div className='portal-outlet'>
                        <Outlet />
                    </div>
                    
                    </div>   
               
                <div style={{padding:'0.5em', fontSize:'1.1em'}}>
                      A &copy; 2022 Copyright | All rights reserved | Bulera Core PTC 
                </div>
             
            </div>
            
        </div>
    );
}

export default PortalLayout;
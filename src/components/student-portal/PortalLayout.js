import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Row, Col, Divider, Space} from 'antd';
import {
    HomeFilled,
    SettingFilled,
    DollarCircleFilled,
    AreaChartOutlined,
    PoweroffOutlined,
    WechatFilled,
    BellFilled
} from '@ant-design/icons';
import profilePic from '../../pics/profil.jpg';

function PortalLayout() {
    return (
        <div>
            <div className='top-menu portal'>
                <Link to='/student-portal/home' style={{ color: 'orange', fontSize: '1.2em', margin: 'auto 3em' }}>
                    Bulera Core PTC Students' Portal
                </Link>  
                <li><BellFilled style={{ fontSize: '1.4em' }} /></li>
                <li>Angelina Jolly</li>
                <li><img src={profilePic} alt='prof' /> </li>
                
            </div>
            <div className="pages-container">
                <Row gutter={4}>
                    <Col style={{textAlign:'center'}} className="left-menu">
                        <ul className='portal-sideMenu'>
                            <div className='profile-pic'>
                                <img src={profilePic} alt='prof'/>
                            </div> 
                            <Link to='/student-portal/home'>
                                <li> <Space> <HomeFilled style={{ fontSize: '1.5em', padding: '0.3em' }} /> Home </Space></li>
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
                            <Link to='/student-portal/home/blog-page'>
                                <li> <Space> <WechatFilled style={{ fontSize: '1.5em', padding: '0.3em' }} />  Blog </Space></li>
                            </Link>
                            <Link to='/'>
                                <li> <Space> <PoweroffOutlined style={{ fontSize: '1.5em', padding: '0.3em' }} /> Log Out</Space> </li>
                            </Link>
                           
                        </ul>
                        <Divider dashed/>
                        <button
                            className='btn green'
                        >
                            Toggle
                        </button>
                        <Link to='/'>
                        <button
                            className='btn orange'
                            
                        >
                            Log Out
                        </button>
                        </Link>
                    </Col>
                    <Col className="right-pages">
                         <Outlet/>
                    </Col>   
                </Row>
                <div style={{padding:'2em', fontSize:'1.1em'}}>
                      A &copy; 2022 Copyright | All rights reserved | Bulera Core PTC 
                </div>
             
            </div>
            
        </div>
    );
}

export default PortalLayout;
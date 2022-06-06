import React from 'react';
import { Divider, Space } from 'antd';
import BuleraLogoWhite from '../pics/bulera_logo_white.png';
import { TwitterCircleFilled, InstagramFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons';

function Footer() {
    return (
        <div className='foot-style'>
            <div className='foot-content maroon'>
                <h3> Bulera Core Primary Teachers' College </h3>
                "Education for responsibility"
                
            </div>
            <div className='foot-content'>
                <h3>Quick Links</h3>

                <ul>
                    <li>Online Application</li>
                    <li>Students' Portal</li>
                    <li>Ministry of Education and Sports</li>
                    <li>Kyambogo University</li>
                    <li>Shimoni Core PTC</li>
                    <li>Hoima City Commission</li>
                </ul>
                
            </div>
            <div className='foot-content'>
                <h3>About Us</h3>
                <Space style={{fontSize:'2em', color:'rgb(11, 96, 165)', cursor:'pointer',padding:'0.2em 0'}}>
                    <FacebookFilled />
                    <TwitterCircleFilled />
                    <InstagramFilled />
                    <LinkedinFilled />
                </Space>
                <h3> Location</h3>
                The College is located along Hoima - Kampala Highway,
                just 3Km from Hoima City In Kyakaliba Cell, Hoima East City - Busiisi Division. We are open 24/7 <br />
                <p>
                    <b>Address:</b> P.O Box 200, Hoima(U) <br/>
                    <b>Telephone:</b> +256 200 925690 <br/>
                    <b>Email:</b> buleraptc940@gmail.com 
                </p>
                
            </div>
            <div className='foot-content'>
                <h3>Download App </h3>
                This web app is optimized to approximate a mobile App. <br />
                Just enjoy the two modes at a time.
                <Divider dashed />
                <button className='btn green'>Contact Us!</button>
                
                
            </div>
            <div className='last'> A Copyright &copy; 2022, All rights reserved by Bulera Core PTC | <a href='#'> Designed by Bgima Inc</a></div>
        </div>
    );
}

export default Footer;
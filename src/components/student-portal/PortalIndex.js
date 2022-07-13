import React, {useEffect, useState} from 'react';
import { Divider } from 'antd';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProfile } from '../../features/profile';
import {
    FacebookOutlined,
    DownOutlined,
    DownCircleFilled,
    UpOutlined,
    RightOutlined,
    RightCircleFilled,
    ArrowDownOutlined
} from '@ant-design/icons';

function PortalIndex() {
    const [regIndex, setRegIndex] = useState({
        regNo:''
    });
    const [figh, setFigh] = useState({
        color: {
            red: 20,
            white:36
        },
        brand:'lenovo'
        
    })
    const dispatch = useDispatch();
     const obtainReg = () => {
        const dato = {
            regNo: regIndex.regNo
        }
        axios.post('/api/portal/check-reg-no',dato)
            .then((res) => {
                console.log(res.data);
                dispatch(setProfile(res.data.content))
            })
         .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        setTimeout(() => {
            console.log('Timeout called');
        }, 5000);
    
    }, []);
  
    return (
        <div className='tb-wrapper'>
            <h2> Welcome to Bulera Core Students' Portal </h2>
            <div className='tb-left'>
                <div className='rect-card-small-hd blue'> 
                    <b> Name </b> Your Profile is 20% complete   <DownOutlined style={{cursor:'pointer', padding:'2px', float:'right'}} /> 
                </div>
                <Divider dashed />
                <div className='rect-card'>
                
                <h3>Your Calendar <RightCircleFilled style={{cursor:'pointer', padding:'2px', float:'right'}}/></h3>
                <p>
                    Take a look at your time table and plan accordingly 
                </p>
                
                </div>
                <div className='rect-card'>
                    <h3> Payments <RightCircleFilled style={{cursor:'pointer', padding:'2px', float:'right'}}/></h3>
                    <p>
                        You have pending invoices...  
                    </p>
                    
                </div>
                  <div className='rect-card'>
                    <h3> Results <RightCircleFilled style={{cursor:'pointer', padding:'2px', float:'right'}}/></h3>
                    <p>
                        Check out your results  
                    </p>
                    
                </div>
                <Divider dashed />
                 <div className='rect-card-small-hd blue'> 
                    We ere soon launching your online library  <DownOutlined style={{cursor:'pointer', padding:'2px', float:'right'}} /> 
                </div>
                <Divider dashed/>
                <div className='rect-card'>
                    <h3> Notifications <RightCircleFilled style={{cursor:'pointer', padding:'2px', float:'right'}}/></h3>
                    <p>
                        You have unread messages!
                    </p>
                </div>
            </div>
            <div className='tb-right'>
                <h3> Upcoming Events </h3>
                <div className='rect-card-small'>
                    <h4>Graduation Ceremony <DownOutlined style={{cursor:'pointer', padding:'2px', float:'right'}} /> </h4> 
                    For ECD Students 
                    
                </div>
                 <div className='rect-card-small'>
                    <h4>Farewell Bid <DownOutlined style={{cursor:'pointer', padding:'2px', float:'right'}} /> </h4> 
                    For our former Principal and staff 
                    
                </div>
                 <div className='rect-card-small'>
                    <h4>Final School Practice <DownOutlined style={{cursor:'pointer', padding:'2px', float:'right'}} /> </h4> 
                    For all year II Grade III Students 
                    
                </div>
                 <div className='rect-card-small'>
                    <h4>Year II Final Examinations <DownOutlined style={{cursor:'pointer', padding:'2px', float:'right'}} /> </h4> 
                    For all year II Grade III Students 
                    
                </div>
                <h3> News & Updates </h3>
                <div className='rect-card-small'>
                    <h4>National Teacher Policy launched   </h4> 
                   The National Teacher Policy was launched by the first lady Ms. Janet Kataha Museveni at Hotel Africana on 24th-July-2022
                    
                </div>
            </div>
            
            <input
                placeholder='Enter registration Number'
                value={regIndex.regNo}
                onChange={(e)=>setRegIndex({...regIndex, regNo:e.target.value})}
            />
            <button className='btn green' onClick={obtainReg}>Check User</button>
            <hr />
            {figh.color.red}
            <input
                value={figh.color.red}
                onChange = {(e)=>setFigh({color:{...figh.color, red:e.target.value}})}
            /> Click me 
        </div>
    );
}

export default PortalIndex;
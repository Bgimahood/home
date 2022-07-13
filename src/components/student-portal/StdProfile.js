import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Avag from '../../pics/profil.jpg';
import { setProfile } from '../../features/profile';
import axios from 'axios';
import {
    DownOutlined,
    UpOutlined, 
    SaveFilled,
    SaveOutlined,
    SaveTwoTone
} from '@ant-design/icons';


const StdProfile = () => {
    const userDetails = useSelector((user) => user.profile.value);
    const dispatch = useDispatch();
    const [subject, setSubject] = useState(
        {
            sname: '',
            grade: ''
        }
    );
    const [arrag, setArrag] = useState([]);
    const  [profilePicture, setProfilePicture ] = useState({
        pic: ''
    });
    const [details, setDetails] = useState({
        regNo:'',
        password: '',
        profilePic:'',
        userName: '',
        email: '',
        sex: '',
        placeOfOrigin: '',
        dateOfBirth:  '',
        phoneNumber: '',
        verified: '',
        class: '',
        yr: '',
        parentDetails:{ 
            pPhoto: '',
            pName: '',
            pEmail: '',
            pPhoneNumber: '',
            pNin: '',
            pRelation: '',
            pPlaceOfOrigin:  '',
        },
        educationBgd: {
            schName: '',
            uceIndex: '',
            yrOfSit: '',
            uceResults: {
                english: '',
                maths: '',
                science: '',
                sst: '',
                agregate:'',
                grade:  '',
            },
        }
        
    });
    const [value, setValue] = useState(2);
    const [value1, setValue1] = useState(2);
     const [value2, setValue2] = useState(2);
    const [oka, setOka] = useState({display:'none',});
    useEffect(() => {
        if (value % 2 === 1) {
            setOka({display:'none', transition:'all 1s ease-in-out'})
        } else {
            setOka({display:'inline-table', transition:'all 1s ease-in-out'})
        }
    }, [value]);
    const [oka1, setOka1] = useState({display:'none',});
    useEffect(() => {
        if (value1 % 2 === 1) {
            setOka1({display:'inline-table', transition:'all 1s ease-in-out'})
        } else {
            setOka1({display:'none', transition:'all 1s ease-in-out'})
        }
    },[value1]);
        
     const [oka2, setOka2] = useState({display:'none',});
    useEffect(() => {
        if (value2 % 2 === 1) {
            setOka2({display:'inline-table', transition:'all 1s ease-in-out'})
        } else {
            setOka2({display:'none', transition:'all 1s ease-in-out'})
        }
    },[value2]);
    const handleSave = (_id) => {
        console.log(details);
        axios.patch(`/api/portal/update-profile/${_id}`, details)
         .then((res) => {
             console.log(res.data.message);                
                //localStorage.setItem("token", token.data);
            })
            .catch((error) => {
                console.log(error)
            })
    };
    const handleSubject = () => {
        setArrag([...arrag, subject]);
        console.log(arrag);
    };
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setDetails({...details, profilePic: reader.result });
                setProfilePicture({ pic: reader.result });
            }
        }
        reader.readAsDataURL(e.target.files[0]);

    };
    return (
        <div className='tb-wrapper'>
            
           <h2>Set up profile </h2>
            <Divider dashed />
            <div className='col-container'>
                <div className='row-hd blue'>
                    <span>Personal Information </span>
                    
                        {(value % 2 === 1)
                            ?
                            <DownOutlined
                                onClick={() => {
                                    setValue(value + 1)
                                }}
                            style={{ cursor: 'pointer', padding: '2px', float: 'right' }}
                            />
                        :
                        <div className='up-toggle'>
                         <SaveFilled className='row-icon' onClick={() => handleSave(userDetails._id)}/>
                            <UpOutlined
                                onClick={() => {
                                     setValue(value + 1)
                                 }}
                                style={{ cursor: 'pointer', padding: '2px', float: 'right' }} />
                            </div>
                        }
                </div>

                
           <div style={oka}>
            <div className='three-row'>
                <div className='three-col' style={{textAlign:'center'}}>
                    <img src={ profilePicture.pic ? profilePicture.pic : userDetails.profilePic } style={{width:'100px', height:'100px', borderRadius:'50%', position:'relative'}} alt='ava' /> <br/>
                        <input
                            type='file'
                            name='image-upload'
                            id="input1"
                            accept='image/*'
                            onChange={imageHandler}
                        />
                        
                </div>
                <div className='three-col' style={oka}>
                    Full names:
                      <input
                        type='text'
                        placeholder='Enter User name'
                        value={details.userName ? details.userName : userDetails.userName }
                        onChange={(e) => setDetails({ ...details, userName: e.target.value })}
                    />
                    Email address:
                        <input
                            type='text'
                        placeholder='Email address'
                        value={details.email ? details.email : userDetails.email }
                        onChange={(e)=>setDetails({...details, email: e.target.value})}
                    />
                    Mobile Contact:
                        <input
                            type='text'
                        placeholder='Phone Contact'
                        value={details.phoneNumber ? details.phoneNumber : userDetails.phoneNumber}
                        onChange={(e)=>setDetails({...details, phoneNumber: e.target.value})}
                        />
                </div>
                <div className='three-col'>
                    Registration No:
                     <input
                        type='text'
                        placeholder='Registration No.'
                        value={details.regNo ? details.regNo : userDetails.regNo}
                        onChange={(e)=>setDetails({...details, regNo: e.target.value})}
                    />
                    <table>
                        <tr>
                            <td>
                                Date of Birth:
                                <input
                                    type='date'
                                    placeholder='Date of Birth'
                                    value={details.dateOfBirth ? details.dateOfBirth : userDetails.dateOfBirth}
                                     onChange={(e)=>setDetails({...details, dateOfBirth: e.target.value})}
                                />
                            </td>
                            <td>
                                Sex:
                                <select
                                    className='input-selector'
                                    value={details.sex ? details.sex : userDetails.sex}
                                    onChange={(e)=>setDetails({...details, sex: e.target.value})}
                                >
                                    <option>Female</option>
                                    <option>Male</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    Place of origin:
                    <input
                        type='text'
                        placeholder='Place of Origin'
                         value={details.placeOfOrigin ? details.placeOfOrigin : userDetails.placeOfOrigin}
                         onChange={(e)=>setDetails({...details, placeOfOrigin: e.target.value})}
                    />
                </div>
            </div>
               
                    
         </div>
     </div>
            
            <div className='col-container'> 
                    <div className='row-hd blue'>
                            <span>Referee/Guardian's Info </span>
                            <button
                                onClick={() => {
                                    setValue1(value1 + 1)
                                }}
                                className="btn orange"
                            >
                                {(value1 % 2 === 1) ? <b>Hide Info</b> : <b>Show Info</b>}
                            </button> 
                            {(value1 % 2 === 1)
                                ?
                                <button
                                    className='btn green'
                                    style={{ width: 'fit-content' }}
                                    onClick={() => handleSave(userDetails._id)}
                                >
                                    Save Referee/Guardian Info
                                </button>
                                :
                                null
                            }
                    </div>    
                 <div style={oka1}>
            <div className='three-row'>
                <div className='three-col' style={{textAlign:'center'}}>
                    <img src={Avag} style={{width:'100px', borderRadius:'50%'}} alt='ava' /> <br/>
                    <button className='btn maroon'> Change Photo</button>
                </div>
                <div className='three-col'>
                      <input
                                type='text'
                                placeholder='Full Names'
                                value={details.parentDetails.pName ? details.parentDetails.pName : null}
                                onChange={(e) => setDetails({ parentDetails: { ...details.parentDetails, pName: e.target.value } })}
                        />
                        <input
                            type='text'
                                placeholder='Email address'
                                value={details.parentDetails.pEmail ? details.parentDetails.pEmail : null}
                                onChange={(e) => setDetails({ parentDetails: { ...details.parentDetails, pEmail: e.target.value } })}
                        />
                        <input
                            type='text'
                                placeholder='Phone Contact'
                                value={details.parentDetails.pPhoneNumber ? details.parentDetails.pPhoneNumber : null}
                                onChange={(e) => setDetails({ parentDetails: { ...details.parentDetails, pPhoneNumber: e.target.value } })}
                        />
                </div>
                <div className='three-col'>
                             <input
                                type='text'                           
                                placeholder='NIN'
                                value={details.parentDetails.pNin ? details.parentDetails.pNin : null}
                                onChange={(e) => setDetails({ parentDetails: { ...details.parentDetails, pNin: e.target.value } })}
                            />
                            {
                                details.parentDetails.pRelation === ''
                                    ?
                                    <select
                                        className='input-selector'
                                        onChange={(e) => setDetails({ parentDetails: { ...details.parentDetails, pRelation: e.target.value } })}
                                    >
                                        <option>Brother</option>
                                        <option>Sister</option>
                                        <option>Farther</option>
                                        <option>Mother</option>
                                        <option>Uncle</option>
                                        <option>Aunt</option>
                                        <option>Spouse</option>
                                        <option>Other</option>
                                    </select>
                                    :
                                    null
                            }
                    
                    <input
                        type='text'
                        placeholder='Place of Origin'
                        value={details.parentDetails.pPlaceOfOrigin ? details.parentDetails.pPlaceOfOrigin : null}
                        onChange={(e) => setDetails({ parentDetails: { ...details.parentDetails, pPlaceOfOrigin: e.target.value } })}
                    />
                </div>
                    </div>
                    </div>
            </div>
            
                 <div className='col-container'>
                            <div className='row-hd blue'>
                            <span>Education Background </span>
                            <button
                                onClick={() => {
                                    setValue2(value2 + 1)
                                }}
                                className="btn orange"
                            >
                                {(value2 % 2 === 1) ? <b>Hide Info</b> : <b>Show Info</b>}
                            </button> 
                            {(value2 % 2 === 1)
                                ?
                                <button
                                    className='btn green'
                                    style={{ width: 'fit-content' }}
                                    onClick={() => handleSave(userDetails._id)}
                                >
                                    Save Education Info
                                </button>
                                :
                                null
                            }
                </div> 
            <div style={oka2}>
                <div className='three-row'>
                        <div className='three-col'>
                            <input
                                type='text'
                                placeholder='UCE School'
                            />
                        </div>
                        <div className='three-col'>
                            <input
                                type='text'
                                placeholder='Index No.'
                            />
                    </div>
                    <div className='three-col'>
                            <input
                                type='text'
                                placeholder='Year of Sitting'
                            />
                    </div>
                </div>
                <table>
                    <tr className='row-header'>
                        <td style={{width:'4%'}}>
                            S/N
                        </td>
                        <td style={{width:'80%'}}>
                            Subject Name
                        </td>
                        <td style={{width:'16%'}}>
                            Grade
                        </td>
                    </tr> 
                {arrag =='' 
                    ?
                    
                    <div style={{width:'300px'}}>
                        No Suject added yet!
                    </div>
                    :
                   
                     ( arrag.map((subj, index) => (
                    <tr key={index} className='row-body'>
                        <td style={{width:'4%'}}>
                            {index+1}
                        </td>
                        <td style={{width:'80%'}}>
                            {subj.sname}
                        </td>
                        <td style={{width:'16%'}}>
                            {subj.grade}
                        </td>
                    </tr>
                    )))
                        
                }
                </table>
            
                        <input
                            type='text'
                            placeholder='Enter subject'
                            value={subject.sname}
                            onChange={(e)=>setSubject({...subject, sname:e.target.value})}
                        />
                   
                        <select
                            className='input-selector'
                            value={subject.grade}
                            onChange={(e)=>setSubject({...subject, grade:e.target.value})}
                        >
                            <option>D1</option>
                            <option>D2</option>
                            <option>C3</option>
                            <option>C4</option>
                            <option>C5</option>
                            <option>C6</option>
                            <option>P7</option>
                            <option>P8</option>
                            <option>F9</option>
                       </select>
                   
                        <button
                            className='btn green'
                            onClick={handleSubject}
                        >Add</button>
                {arrag.length}
                
           </div>
            </div>
        </div>
    );
}

export default StdProfile;
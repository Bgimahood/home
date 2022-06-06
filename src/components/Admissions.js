import React, {useState} from 'react';
import { Divider, Row, Col} from 'antd';
import { CompassFilled, LikeFilled } from '@ant-design/icons';
import image_exte from '../pics/image_exte.jpeg';
import justIm from '../pics/Mothers-Day-Flowers-Choosing-The-Right-Mothers-Day-Flowers.jpg';
function Admissions() {
    const [like, setLike] = useState(12);
    const [comment, setComment] = useState('');
    const [dis, setDis] = useState(false);
    const [comms, setComms] = useState([]);

    const handleSubmit = () => {
        if (comment !== '') {
            setComms([...comms, comment]);
        }       
        setComment('');
    };
   
    return (
        <div className='admissions-frame'>
            <div className='advert-enclos'>
            <div className='advert-title'>
                Amnesity by Kyambogo University
                </div>
                <img src={justIm} alt='syd' />
            <p>
              
                All those who studied between 2006 and 2019 and did not complete thier grade III certificates for Kyambogo University,
                are hereby invited to take this chance and apply through any PTC so that they can retake their papers.
            </p>
            <div className='like-section'>
                <div className='like-content'>
                    <h5> Posted by: <b>Admin </b> on Tuesday 24th March</h5>
                </div>                 
                <Divider type='vertical' />
                <div className='like-content'>
                    <LikeFilled
                        style={{ fontSize: '1.7em', cursor: 'pointer' }}
                        onClick={()=>setLike(like+1)}
                    />
                    {like} Likes

                </div>
                <Divider type='vertical' />
                <div className='like-content'>
                    <button
                    className='btn green'
                    onClick={() => setDis(true)} 
                > Comments </button>  {comms.length}
                </div>
                
            </div>
            {dis && 
              
                <div style={{ textAlign:'left',marginBottom:'0.5em'}}>
                        <textarea type='text'
                        placeholder='Enter your comment'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={7}
                    ></textarea>
                   
                        <button
                        className='btn green'
                        onClick={handleSubmit}
                    >
                        Comment
                    </button>
                 </div>
                }
            
       
           
            {comms.map((dog, index) => (
                <div key={index} className='post'>
                    {dog} {Date()}
                    <button
                        className='btn orange'
                    >Delete Post</button>
                </div>
            ))}
            </div>
            <div className='advert-enclos'>
                <div className='advert-title'>
                     Call for Applications
                </div>
                <img src={image_exte} alt='yes'/>
            <p>
              
                    The college calls for interested applicants to pursue a Certificate in Early Childhood Development (ECD) for a duration of 2 years.<br />
                    
                </p>
                <div className='like-section'>
                <div className='like-content'>
                    <h5> Posted by: <b>Admin </b> on Tuesday 24th March</h5>
                </div>                 
                <Divider type='vertical' />
                <div className='like-content'>
                    <LikeFilled
                        style={{ fontSize: '1.7em', cursor: 'pointer' }}
                        onClick={()=>setLike(like+1)}
                    />
                    {like} Likes

                </div>
                <Divider type='vertical' />
                <div className='like-content'>
                    <button
                    className='btn green'
                    onClick={() => setDis(true)} 
                > Comments </button>  {comms.length}
                </div>
                
            </div>
            {dis && 
              
                <div style={{ textAlign:'left',marginBottom:'0.5em'}}>
                        <textarea type='text'
                        placeholder='Enter your comment'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={7}
                    ></textarea>
                   
                        <button
                        className='btn green'
                        onClick={handleSubmit}
                    >
                        Comment
                    </button>
                 </div>
                }
            
       
           
            {comms.map((dog, index) => (
                <div key={index} className='post'>
                    {dog} posted on {Date()}
                    <button
                        className='btn orange'
                    >Delete Post</button>
                </div>
            ))}
            </div>
            
         
        </div>
    );
}

export default Admissions;
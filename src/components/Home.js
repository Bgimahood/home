import React from 'react';
import Pic from '../pics/img_avatar.png';
import PrincipalPic from '../pics/Principal_photo.jpg';
import BuleraWhite from '../pics/bulera_logo_white.png';
import Departments from './Departments';

function Home() {
    return (
        <div className="home">
            <div className='corousel'>
                <div className='corousel-content'>
                    <img src={BuleraWhite} alt='ooops' /> <br/>
                    <b> This is Bulera Core PTC-Hoima </b> <br/>
                    Corousel Image 
                </div>
               
            </div>
            
            <div className='quick-links-container'>
                <div className='quick-links green'>
                    <img src={Pic} alt='png_pic'/>
                    <h3>Our Programs</h3>
                    <hr/>
                    We offer both Grade III Certificate and a Certificate in Early Childhood Development (ECD).
                     Both certified by Kyambogo University
                </div>
                <div className='quick-links blue'>
                    <img src={Pic} alt='png_pic'/>
                    <h3>Our Alumni</h3>
                    <hr/>
                    As a college we have a sounding team of Alumni working internationally. They all give testimonies
                    that the college natured them well.
                </div>
                <div className='quick-links orange'>
                   <img src={Pic} alt='png_pic'/>
                    <h3>Students' Portal</h3>
                    <hr/>
                    We have an effective and transparent education system where our Students access their
                    Profile, Results, Payment Schedules, news etc.
                </div>
                <div className='quick-links maroon'>
                    <img src={Pic} alt='png_pic'/>
                    <h3>Our Campus</h3>
                    <hr/>
                    The college has a favourable environment to enable Students learn comfortably and as well
                    perfom cocurricular activities with ease.
                </div>
            </div>
            <div className='goal-card'>
                <div className='header'> ----- BACKGROUND -----</div>
                <p>
                    Bulera Core Ptc is a government aided college found in Hoima East City, in Kyakaliba cell-Busiisi Division. 
                    It is a centre of all core and non core colleges in western Uganda.
                    The college a strong foundation body with Eight members on BOG.
                </p>
            </div>
            <div className='goal-card'>
                <div className='header'>----- OUR GOAL -----</div>
                <p>
                    We strive to becoming a model college in producing teachers who are self esteemed and self propelled.    
                </p>
            </div>
            <div className='goal-card'>
                <div className='goal-cardL'>
                    <div className='header'> ----- OUR MISSION -----</div>
                    worthwhile

                </div>
                <div className='goal-cardL'>
                   <div className='header'>----- OUR VISION ----- </div>
                    To promote quality Edauction nd quality environment
                </div>
            </div>
            <div className='goal-card'>
                <div className='header'>----- ADMINISTRATORS ----- </div>
                <div className='goal-card-content'>                    
                    <img src={Pic} alt='goal' /> 
                    <p style={{ marginTop:'1em'}}>
                        <button className='btn'>DPO</button>
                    </p>
                    
                        <div>
                            Khaista Margaret
                        </div>                 
                </div>
                <div className='goal-card-contentP'>                    
                    <img src={PrincipalPic} alt='goal' /> 
                    <p style={{ marginTop:'1em'}}>
                        <button className='btn'>Principal</button>
                    </p>
                    
                        <div>
                            Okello Humphreys
                        </div>                 
                </div>
                <div className='goal-card-content'>                    
                    <img src={Pic} alt='goal' /> 
                    <p style={{ marginTop:'1em'}}>
                        <button className='btn'>DPP</button>
                    </p>
                    
                        <div>
                            Byaruhanga A Salvatore
                        </div>                 
                </div>
                   
            </div>
            <div className='goal-card'>
                <Departments/>
            </div>
            
        </div>
    );
}

export default Home;
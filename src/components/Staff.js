import React, {useState} from 'react';

function Staff() {
    const [pages, setPages] = useState([
        (
            <div>
                <h2> Going for prayers</h2>
                <p>
                    I want to go for prayers tomorrow
                </p>
            </div>
        ),
        (
           <div>
                <h2> Going for Work</h2>
                <p>
                    I will go for work on Tuesday
                </p>
            </div> 
        ),
        (
           <div>
                <h2> Developing User Interfaces</h2>
                <p>
                    For Bulera CPTC web app
                </p>
            </div> 
        ),
       
    ]);
    const [count, setCount] = useState(0);
    return (
        <div>
            Staff login
            <hr />
            Step {count+1} of {pages.length}
            <div style={{border:'1px solid #333', width:'60%',padding:'1em',margin:'1em 20%'}}>
                {pages[count]}
            </div>
            <button className='btn maroon' onClick={() => setCount(count - 1)}>Previous</button>
            <button className='btn green' onClick={() => setCount(count + 1)}>Next</button>
        </div>
    );
}

export default Staff;
import React from 'react';
import { Divider} from 'antd';

function StdPayments() {
    return (
        <div className='tb-wrapper'>
            <Divider dashed/>
            <h2> Previous Payments </h2>
            <Divider dashed/>
            <div>
                <div className='card'>
                    <div className='card-img'> Term I : 2021</div>                    
                    <div className='card-body'>
                         <p>
                             <b> Amount Due:</b> 345,000 UGX
                        </p>
                        <p>
                           <b> Fees Paid: </b>  201,000 UGX
                        </p>
                        <p>
                            <b> Balance: </b> 127,000 UGX
                        </p>
                       
                    </div>
                   
                </div>
                <div className='card'>
                    <div className='card-img'> Term II : 2021</div>                    
                    <div className='card-body'>
                         <p>
                             <b> Amount Due:</b> 445,000 UGX
                        </p>
                        <p>
                           <b> Fees Paid: </b>  445,000 UGX
                        </p>
                        <p>
                            <b> Balance: </b> NILL
                        </p>
                       
                    </div>
                   
                </div>
                <div className='card'>
                    <div className='card-img'> Term III : 2021</div>                    
                    <div className='card-body'>
                         <p>
                             <b> Amount Due:</b> 310,000 UGX
                        </p>
                        <p>
                           <b> Fees Paid: </b>  120,000 UGX
                        </p>
                        <p>
                            <b> Balance: </b> 10,000 UGX
                        </p>
                       
                    </div>
                   
                </div>
                <div className='card'>
                    <div className='card-img'> Term I : 2022</div>                    
                    <div className='card-body'>
                         <p>
                             <b> Amount Due:</b> 310,000 UGX
                        </p>
                        <p>
                           <b> Fees Paid: </b>  120,000 UGX
                        </p>
                        <p>
                            <b> Balance: </b> 10,000 UGX
                        </p>
                       
                    </div>
                   
                </div>
                <div className='card'>
                    <div className='card-img'> Term II : 2022</div>                    
                    <div className='card-body'>
                         <p>
                             <b> Amount Due:</b> 310,000 UGX
                        </p>
                        <p>
                           <b> Fees Paid: </b>  120,000 UGX
                        </p>
                        <p>
                            <b> Balance: </b> 10,000 UGX
                        </p>
                       
                    </div>
                   
                </div>
                <div className='card'>
                    <div className='card-img'> Term III : 2022</div>                    
                    <div className='card-body'>
                         <p>
                             <b> Amount Due:</b> 310,000 UGX
                        </p>
                        <p>
                           <b> Fees Paid: </b>  120,000 UGX
                        </p>
                        <p>
                            <b> Balance: </b> 10,000 UGX
                        </p>
                       
                    </div>
                   
                </div>
            </div>
            
        </div>
    );
}

export default StdPayments;
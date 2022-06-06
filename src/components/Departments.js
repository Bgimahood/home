import React from 'react';
import departmentFile from './files/departmentFile';

function Departments() {
    return (
        <div className='dept' gutter={4}>
            {departmentFile.map((dept, index) => (
                <div key={index} className='depart-enclo' >
                    <b> {dept.departmentName}</b> 
                    <hr/>
                    H.O.D:<span> {dept.headOfDepartment}</span><br/>
                     <i> {dept.description} </i>
                </div>
            ))}
            <div className='depart-enclo1'>
                View More
            </div>
        </div>
    );
}

export default Departments;
import React from 'react';
import { Link } from "react-router-dom";

function StudentPortal() {
    return (
        <div>
            Welcome to the students' portal <br/>
            <Link to='/student-portal/home'><h2>Continue </h2></Link>
        </div>
    );
}

export default StudentPortal;
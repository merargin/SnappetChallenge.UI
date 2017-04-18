import React from 'react';

const Student = ({ student }) => {
    return (
        <li key={student.desc} className="pupil__listitem">
            <span className={student}></span>
        </li>
    )
}

export default Student
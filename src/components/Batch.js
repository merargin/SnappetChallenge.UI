import React from 'react';
import Student from './Student';
import utils from '../utils';

const Batch = ({ batch }) => {
    let students = utils.getStudents(batch);
    return (
        <div>
            <div id="contentlist__title" className="contentlist__title">
                <span className="contentlist__title-content">{batch.desc}</span>
            </div>
            <div className="contentlist__pupils">
                <ul className="pupils__list">
                    { students.map( student => {
                        return <Student key={utils.getId()} student={student} />
                    })}
                </ul>
                <div className="more-informaiton">
                    <a className="more-informaiton__content">Show details</a>
                </div>
            </div>
        </div>
	);
};

export default Batch

import React from 'react';
import Batch from './Batch';
import api from '../api';
import utils from '../utils';

const TableContents = ({ grade }) => {
    const details = api.getDetails(grade.level);
    return (
        <div className="content__details">
            <div className="content__headers">
                <div className="content__header">
                    <a className="content__header-options">Learning Objective</a>
                    <span className="sort__down"></span>
                </div>
                <div className="content__header">Pupils</div>
            </div>
            <div className="contentlist">
                { details.map(batch => {
                    return <Batch key={utils.getId()} batch={batch}/>
                })}
            </div>
        </div>
    );
};

export default TableContents;

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import api from '../api';
import TableContents from './TableContents';

class Toolbar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            grades: null,
            grade: null,
            showMenu: false
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.select = this.select.bind(this);
    }

    componentWillMount(){
        const grades = api.getGrades();
        this.setState({
            grade: grades[0],
            grades
        });
    }

    select(grade){
        this.setState({ grade });
    }

    show(){
        this.setState({ showMenu: true });
        document.addEventListener("click", this.hide);
    }

    hide(evt){
        this.setState({ showMenu: false });
        document.removeEventListener("click", this.hide);
    }

    render(){
        let comboClass = "combo__options" + (this.state.showMenu ? " toolbar--opened": "");
        let dropDownClass = "combo__selected-value" + (this.state.showMenu ? " dropdown--uparrow": "");
        return (
            <div>
                <div className="toolbar">
                    <div className="toolbar__item  toolbar__item--left">
                        <div className="toolbar__buttons">
                            <a className="toolbar__button sel toolbar__button--icon toolbar__button--balls"></a>
                            <a className="toolbar__button toolbar__button--icon toolbar__button--person"></a>
                        </div>
                        <div className="toolbar__combo" onClick={this.show}>
                            <div id="combo__selected-value" className={dropDownClass}>{this.state.grade.title}</div>
                                <ul className={comboClass} >
                                {
                                    this.state.grades.map(option => {
                                        return <li key={option.level} onClick={this.select.bind(null, option)} className="comob__option">{option.title}</li>
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                        <div className="toolbar__item toolbar__item--right">
                            <a className="toolbar__button toolbar__button--icon toolbar__button--add">Add learning objective</a>
                            <a className="toolbar__button toolbar__button--icon toolbar__button--refresh">Automatic update</a>
                        </div>
                    </div>
                <TableContents grade={this.state.grade} />
            </div>
        );
    }
};

export default Toolbar;


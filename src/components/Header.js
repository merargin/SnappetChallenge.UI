import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="header__topics">
                    <ul className="header__topics-list">
                        <li className="header__topic">Dashboard</li>
                        <li className="header__topic">Snappet</li>
                    </ul>
                </div>
                <div className="header__title">
                    <img className="header__title-image" alt="Front-End Challenge" src="src/icons/gift.svg" />
                    <h1 className="header__title--text">Front-End Challenge</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;

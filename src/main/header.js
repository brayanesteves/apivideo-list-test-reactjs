import React from 'react';
import './assets/css/styles.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <i className="fas fa-bars"></i>
                <img src="" alt="Logo" className="logo" />
            </div>
            <div className="header-center">
                <div className="search">
                    <input type="text" name="" id="" className="search-box" placeholder="Search"/>
                    <button className="search-btn"><i className="fas fa-search"></i></button>
                </div>
            </div>
            <div className="header-right">
                <div className="user-info">
                    <i className="far fa-comment-alt"></i>
                    <i className="far fa-bell"></i>
                    <img src="" alt="avatar" className="avatar" />
                </div>

                <div className="upload">
                    <button className="upload-btn">
                        <i className="fas fa-long-arrow-alt-up"></i>
                        {" "} Upload
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Header;
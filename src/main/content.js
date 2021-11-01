import React from 'react';
import HomeContent from '../page/home/homecontent';
import Sidebar from './sidebar'
import './assets/css/styles.css';
const Content = () => {
    return (
        <div className="content">
            <Sidebar />
            <HomeContent />
        </div>
    )
}

export default Content
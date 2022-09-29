import React from 'react';
import './index.css';

const Toolbar = ({openSidebar}) => {
    return (
        <div className='tool-bar'>
            <div className='burger' onClick={openSidebar}>
            <i className="ri-menu-line"></i>  </div>
           
            <div className='title'>DashBoard</div>
        </div>
    );
};

export default Toolbar;
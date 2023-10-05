import './background.css';
import React from 'react';

const Background = () => {
    return (
        <div className='background-layout'>
            <div className='background-content'>
                <div className='background background-header' >Header</div>
                <div className='background background-main' >Main</div>
                <div className='background background-footer' >Footer</div>
            </div>
            <div className='background-sidebar'>
                <div className='background background-sidebar-item' >Sidebar Item</div>
                <div className='background background-sidebar-item' >Sidebar Item</div>
                <div className='background background-sidebar-item' >Sidebar Item</div>
            </div>
        </div>
    )
}

export default Background;
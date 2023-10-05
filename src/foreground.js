import './foreground.css';
import React from 'react';

const Foreground = () => {
    return (
        <div className='layout'>
            <div className='content'>
                <div className='header' />
                <div className='main' />
                <div className='footer' />
            </div>
            <div className='sidebar'>
                <div className='sidebar-item' />
                <div className='sidebar-item' />
                <div className='sidebar-item' />
            </div>
        </div>
    )
}

export default Foreground;
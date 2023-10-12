import './foreground.css';
import React from 'react';

const Foreground = () => {
    return (
        <div className='layout'>
            <div className='content'>
                <div className='foreground header'>Header</div>
                <div className='foreground main'>Main</div>
                <div className='foreground footer'>Footer</div>
            </div>
            <div className='sidebar'>
                <div className='foreground sidebar-item'>Sidebar Item</div>
                <div className='foreground sidebar-item'>Sidebar Item</div>
                <div className='foreground sidebar-item'>SIdebar Item</div>
            </div>
        </div>
    )
}

export default Foreground;

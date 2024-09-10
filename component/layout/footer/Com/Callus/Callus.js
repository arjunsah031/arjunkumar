import React from 'react';
import CssStyle from './Callus.module.css';

const Callus = () => {
    return (
        <div className={CssStyle.Con}>
            <div>Call us</div>
            {/* 'tel:' protocol used for phone call */}
            <a className={CssStyle.Number} href='tel:+918838977537'>
                <span>8838977537</span>
            </a>
        </div>
    );
};

export default Callus;

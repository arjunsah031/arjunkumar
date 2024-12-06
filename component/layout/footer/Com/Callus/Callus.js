import React from 'react';
import CssStyle from './Callus.module.css';

const Callus = () => {
    return (
        <div className={CssStyle.Con}>
            <div>Call us</div>
            {/* 'tel:' protocol used for phone call */}
            <a className={CssStyle.Number} href='tel:9709475100'>
                <span>9709574100</span>
            </a>
        </div>
    );
};

export default Callus;

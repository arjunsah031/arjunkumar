import React from 'react';
import CssStyle from './SosalMedia.module.css';

import { BsFacebook } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';
import { TbBrandYoutube } from 'react-icons/tb';
import { CgInstagram } from 'react-icons/cg';

const SosalMedia = (props) => {
    const size = props.size;
    const color = props.color;
    const backgroundcolor = props.backgroundcolor;
    
    const IconStyle = {
        fontSize: size,
        color: color,
        backgroundColor: backgroundcolor,
    };

    return (
        <div className={`${CssStyle.Con} ${props.className}`}>
            <a
                className={CssStyle.ImgCon}
                href='https://youtu.be/LQKahQz0lbc'
                target='_blank'
                rel='noopener noreferrer'
            >
                <TbBrandYoutube style={IconStyle} />
            </a>

            <a
                className={CssStyle.ImgCon}
                href='https://m.facebook.com/photo.php?fbid=1149685272105206&id=100011912314348&set=a.105817569825320&source=11&refid=17'
                target='_blank'
                rel='noopener noreferrer'
            >
                <BsFacebook style={IconStyle} />
            </a>

            <a
                className={CssStyle.ImgCon}
                href='https://instagram.com/sandeep__maheshwari?igshid=YmMyMTA2M2Y='
                target='_blank'
                rel='noopener noreferrer'
            >
                <CgInstagram style={IconStyle} />
            </a>

            <a
                className={CssStyle.ImgCon}
                href='https://wa.me/qr/BNXK7DJARPPOB1'
                target='_blank'
                rel='noopener noreferrer'
            >
                <ImWhatsapp style={IconStyle} />
            </a>
        </div>
    );
};

export default SosalMedia;

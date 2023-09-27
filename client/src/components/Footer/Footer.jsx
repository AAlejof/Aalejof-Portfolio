import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return (
        <>
            <div className={style.footerDiv}>
                <p className={style.pFooterDiv}>AALEJOF · 2023</p>
                <p className={style.pFooterDiv}><a href="mailto:adrianalejof@gmail.com">CONTACT ME</a></p>
            </div>
        </>
    )
}

export default Footer;
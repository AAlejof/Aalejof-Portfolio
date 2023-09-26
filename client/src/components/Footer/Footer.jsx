import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return (
        <>
            <div className={style.footerDiv}>
                <p className={style.pFooterDiv}>AALEJOF · 2023</p>
            </div>
        </>
    )
}

export default Footer;
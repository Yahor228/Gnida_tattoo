import React from "react";
import styles from 'C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\styles\\Footer.module.css';

import { ROUTES } from "C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\utils\\routes.js"; // Исправленная ошибка в имени
import LOGO from "C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\images\\logo192.png";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <section className={styles.footer}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt='Stuff'/>
            </Link>
        </div>
        <div className={styles.rights}>
            Developed by {" "}
            <a
                href="https://www.instagram.com/wtf_228/"
                target = "_blank"
                rel = "noreferrer">
            JS
            </a>
        </div>

        <div className={styles.socials}>
            <a
                href="https://www.instagram.com/gnida_tattoo/"
                target = "_blank"
                rel = "noreferrer">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                </svg>
            </a>

             <a
                href="https://www.instagram.com/gnida_tattoo/"
                target = "_blank"
                rel = "noreferrer">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#telegram`} />
                </svg>
            </a>

             <a
                href="https://www.instagram.com/gnida_tattoo/"
                target = "_blank"
                rel = "noreferrer">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                </svg>
            </a>


        </div>

    </section>
  );
};

export default Footer;

import React from "react";
import styles from 'C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\styles\\Header.module.css';
import {Link} from "react-router-dom";
import { ROUTES } from "C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\utils\\routes.js"; // Исправленная ошибка в имени
import LOGO from "C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\images\\logo192_20.png";
import AVATAR from "C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\images\\logo512.png"
const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="Logo"/>
             </Link>
        </div>

        <div className={styles.info}>
            <div className={styles.user}>
                <div className={styles.avatar}
                     style={{backgroundImage:`url(${AVATAR})`}}
                />
                <div className={styles.username}>
                    Guest
                </div>
            </div>
            <form className={styles.form}>
                <div className={styles.icon}>
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                    </svg>
                </div>
                <div className={styles.input}>
                    <input
                        type='search'
                        name='search'
                        placeholder='Searching for anything'
                        autoComplete="off"
                        onChange={() =>{}}
                        value=''
                    />
                </div>
                {false && <div className={styles.box}></div>}
            </form>
            <div className={styles.account}>
                <Link to={ROUTES.HOME} className={styles.favourites}>
                    <svg className={styles["icon-fav"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}></use>
                    </svg>
                </Link>
                     <Link to={ROUTES.CART} className={styles.cart}>
                    <svg className={styles["icon-cart"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}></use>
                    </svg>
                    <span className={styles.count}>2</span>
                </Link>

            </div>
        </div>
    </div>
  );
};

export default Header;

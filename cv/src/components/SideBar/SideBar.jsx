import React from "react";
import styles from 'C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\styles\\Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const SideBar = () => {
  const {list} = useSelector(({categories}) => categories)
  return(
    <section className={styles.sidebar}>
        <div className={styles.title}>
            CATEGORIES
        <nav>
            <ul className={styles.menu}>
                {list.map(({id,name}) => (

                <li key = {id}>
                    <NavLink
                        className={({isActive}) =>
                            `${styles.link} ${isActive ? styles.active:""}`
                        }
                        to={`/categories/${id}`} >
                        {name}
                    </NavLink>
                </li>
                ))}
            </ul>
        </nav>
        </div>
        <div className={styles.footer}>
            <a href="/help" target='_blank' className={styles.link}>
                Help
            </a>
            <a href="/help" target='_blank' className={styles.link} style={{textDecoration:"underline"}}>
                Terms & Conditions
            </a>
        </div>
    </section>
  )
};

export default SideBar;

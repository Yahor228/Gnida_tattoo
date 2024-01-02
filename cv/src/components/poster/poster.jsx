import React, {Component} from 'react';
import styles from "C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\styles\\Home.module.css";
import BG from "C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\images\\Gleb.png"

class Poster extends Component {
    render() {
        return (
            <section className={styles.home}>
                <div className={styles.title}>Best price ever , NI**</div>
                <div className={styles.product}>
                    <div className={styles.text}>
                        <div className={styles.subtitle}>БУДЬ МУЖИКОМ! Иди забиваться !</div>
                        <h1 className={styles.head}>Let's make your ideas come to life. Sign up !!!</h1>
                        <button className={styles.button}>Trademark the term </button>
                    </div>
                    <div className={styles.image}>
                        <img src={BG} alt=''/>

                    </div>
                </div>
            </section>
        );
    }
}

export default Poster;
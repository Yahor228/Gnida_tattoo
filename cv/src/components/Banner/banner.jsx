import React from 'react';
import styles from "C:\\Users\\senic\\PycharmProjects\\CV\\cv\\src\\styles\\Home.module.css";
import banner from "../../images/Banner.png"


const Banner = () => (
    <section className={styles.banner}>
        <div className={styles.left}>
            <p className={styles.content}>
                Я вообще бой . Часто по вечерам  люблю подержать стакан бабкиных анализов в руке ....
                Ощутить этот запах карвалола с тонкими нотками соленых огурчиков. Такие моменты напоминают мне о местах былой славы,
                о тех временах когда в каждом доме престарелых слагали легенды о повелителе оргазма 80+ -
                о Глебе "FastHands"
                <span>
                    SALE
                </span>
            </p>
            <button className={styles.more}>
                See more
            </button>
        </div>
        <div className={styles.right}
                style={{backgroundImage:`url(${banner})`}}>

        </div>
    </section>
);

export default Banner;

import React from "react";
import styles from "../styles/Advantages.module.scss";
export default function Advantages() {
  
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h1>Почему стоит выбрать именно нас?</h1>
        <div className={styles.container__line}></div>
        <div className={styles.container__grid}>
          <div className={styles.grid__elem}>
            <div className={styles.elem__circle}>
              <div style={{backgroundImage: "url('/public/adv/adv(1).png')"}}></div>
            </div>
            <h3>Таможенное оформление груза</h3>
          </div>
          <div className={styles.grid__elem}>
            <div className={styles.elem__circle}>
              <div style={{backgroundImage: "url('/public/adv/adv(8).png')"}}></div>
            </div>
            <h3>Страховка груза</h3>
          </div>
          <div className={styles.grid__elem}>
            <div className={styles.elem__circle}>
              <div style={{backgroundImage: "url('/public/adv/adv(7).png')"}}></div>
            </div>
            <h3>Проверка товара на брак</h3>
          </div>
          <div className={styles.grid__elem}>
            <div className={styles.elem__circle}>
              <div style={{backgroundImage: "url('/public/adv/adv(6).png')"}}></div>
            </div>
            <h3>Доставка в любой город РФ</h3>
          </div>
          <div className={styles.grid__elem}>
            <div className={styles.elem__circle}>
              <div style={{backgroundImage: "url('/public/adv/adv(5).png')"}}></div>
            </div>
            <h3>Консолидация на складе</h3>
          </div>
          <div className={styles.grid__elem}>
            <div className={styles.elem__circle}>
              <div style={{backgroundImage: "url('/public/adv/adv(4).png')"}}></div>
            </div>
            <h3>Ответственное хранение груза</h3>
          </div>
          <div className={styles.grid__elem}>
            <div className={styles.elem__circle}>
              <div style={{backgroundImage: "url('/public/adv/adv(3).png')"}}></div>
            </div>
            <h3>Помощь в оплате товара</h3>
          </div>
          <div className={styles.grid__elem}>
            <div className={styles.elem__circle}>
              <div style={{backgroundImage: "url('/public/adv/adv(2).png')"}}></div>
            </div>
            <h3>
              Упаковка, переупаковка, паллетирование груза к международной
              перевозке
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

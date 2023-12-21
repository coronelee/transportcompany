
import styles from "../styles/Header.module.scss";
export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.container__logo}><img src="/public/logo.png" alt="" /></div>
        <div className={styles.container__linksBar}>
          <a href="">Цены и сроки</a>
          <a href="">Услуги</a>
          <a href="">О компании</a>
          <a href="">Контакты</a>
          <a href="">Оформить груз</a>
        </div>
        <button className={styles.container__button}>Оставить заявку</button>
      </div>
    </div>
  );
}

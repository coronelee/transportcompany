import styles from "../styles/Footer.module.scss";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.footer__line}></div>
        <div className={styles.footer_links}>
          <div className={styles.column}>
            <div className={styles.column__logo}>
              <img src="/public/logo.png" alt="" />
            </div>
            <div className={styles.column__contacts}>
              <span>8(800)600-18-69</span>
              <span>info@cargoasia.info</span>
              <span>Адрес в Китае:</span>
              <span>
                浙江省金华市义乌市后宅街道洪华小区5 栋一单元一楼RT789库房 高建军
                电话15966660379
              </span>
            </div>
            <div className={styles.column__social}>
              <FaInstagram /> <FaTelegram /> <SlSocialVkontakte />
            </div>
          </div>
          <div className={styles.column}>
            <h1>Грузоперевозки</h1>
            <a href="">Цены и сроки</a>
            <a href="">Услуги</a>
            <a href="">О компании</a>
            <a href="">Контакты</a>
            <a href="">Оформить груз</a>
          </div>
          <div className={styles.column}>
            <h1>Услуги</h1>
            <a href="">Выкуп товара</a>
            <a href="">Страховка груза</a>
            <a href="">Аренда склада</a>
            <a href="">Перевод денежных средств</a>
          </div>
          <div className={styles.column}>
            <h1>Информация</h1>
            <a href="">Отзывы</a>
            <a href="">Требования к грузу</a>
            <a href="">Договор-оферта</a>
            <a href="">Как заключить договор</a>
            <a href="">Способы оплаты услуг</a>
            <a href="">Документы</a>
            <a href="">Статьи</a>
          </div>
        </div>
      </div>
    </div>
  );
}

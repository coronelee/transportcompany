import { useState, useEffect } from "react";
import styles from "../styles/Header.module.scss";
import { CiMenuFries } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
function getWindowSize() {
  const width = window.innerWidth;
  return width;
}
export default function Header() {
  const [clicked, setClicked] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (clicked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <div className={styles.wrapper}>
      {clicked ? (
        <>
          <div className={styles.menu__hamburger} onClick={()=>setClicked(false)}>
            <a href="">Цены и сроки</a>
            <a href="">Услуги</a>
            <a href="">О компании</a>
            <a href="">Контакты</a>
            <a href="">Оформить груз</a>
            <button className={styles.container__button}>Оставить заявку</button>
          </div>
          
        </>
      ) : (
        ""
      )}
      <div className={styles.wrapper__container}>
        <div className={styles.container__logo}>
          <img src="/public/logo.png" alt="" />
        </div>

        {windowSize < 950 ? (
          <>
            {!clicked ? (
              <CiMenuFries onClick={() => setClicked(!clicked)} />
            ) : (
              <CgClose onClick={() => setClicked(!clicked)} />
            )}
          </>
        ) : (
          <>
            <div className={styles.container__linksBar}>
              <a href="">Цены и сроки</a>
              <a href="">Услуги</a>
              <a href="">О компании</a>
              <a href="">Контакты</a>
              <a href="">Оформить груз</a>
            </div>
            <button className={styles.container__button}>
              Оставить заявку
            </button>
          </>
        )}
      </div>
    </div>
  );
}

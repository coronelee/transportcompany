import { useState } from "react";
import styles from "../styles/Slider.module.scss";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function Slider() {
  const [itemsCount, setItemsCount] = useState(0);
  const items = [
    {
      photo: "/public/slider/slider3.png",
      h1: "Прямое КАРГО из Китая",
      h3: "Доставляем любые грузы из Китая по честной цене",
      key: 0,
    },
    {
      photo: "/public/slider/slider.png",
      h1: "Гарантируем сроки!",
      h3: "Если мы не уложимся в обозначенные сроки, доставка груза со скидкой до 90%",
      key: 1,
    },
    {
      photo: "/public/slider/slider4.png",
      h1: "Выкуп товара с ТаоБао, 1688",
      h3: "Выкуп и доставка товаров с китайских торговых площадок. ",
      key: 2,
    },
    {
      photo: "/public/slider/slider2.png",
      h1: "Экспресс авто доставка",
      h3: "Доставка автотранспортом из Китая в Россию от 15 дней, от $0,5/кг",
      key: 3,
    },
  ];

  const sliderUP = (item: number) => {
    if (item >= 3) {
      setItemsCount(0);
      let element: any = document.getElementById("0");
      element.style.backgroundColor = "white";
      element = document.getElementById("1");
      element.style.backgroundColor = "transparent";
      element = document.getElementById("2");
      element.style.backgroundColor = "transparent";
      element = document.getElementById("3");
      element.style.backgroundColor = "transparent";
    } else {
      setItemsCount(itemsCount + 1);
      let element: any = document.getElementById(item + 1 + "");
      element.style.backgroundColor = "white";
      element = document.getElementById(item + "");
      element.style.backgroundColor = "transparent";
      element = document.getElementById(item + 2 + "");
      element.style.backgroundColor = "transparent";
      element = document.getElementById(item + 3 + "");
      element.style.backgroundColor = "transparent";
    }
  };

  setTimeout(function tick() {
    sliderUP(items[itemsCount].key);
  }, 2500);

  const sliderDOWN = (item: number) => {
    if (item <= 0) {
      setItemsCount(3);
      let element: any = document.getElementById("3");
      element.style.backgroundColor = "white";
      element = document.getElementById("0");
      element.style.backgroundColor = "transparent";
      element = document.getElementById("1");
      element.style.backgroundColor = "transparent";
      element = document.getElementById("2");
      element.style.backgroundColor = "transparent";
    } else {
      setItemsCount(itemsCount - 1);
      let element: any = document.getElementById(item - 1 + "");
      element.style.backgroundColor = "white";
      element = document.getElementById(item + "");
      element.style.backgroundColor = "transparent";
      element = document.getElementById(item - 2 + "");
      element.style.backgroundColor = "transparent";
      element = document.getElementById(item - 3 + "");
      element.style.backgroundColor = "transparent";
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.wrapper__container}
        style={{ backgroundImage: "url(" + items[itemsCount].photo + ")" }}
      >
        <div className={styles.container__arrs}>
          <MdArrowBackIos onClick={() => sliderDOWN(items[itemsCount].key)} />
          <MdArrowForwardIos onClick={() => sliderUP(items[itemsCount].key)} />
        </div>
        <div className={styles.container__text}>
          <h1>{items[itemsCount].h1}</h1>
          <h3>{items[itemsCount].h3}</h3>
          <button>
            Рассчитать стоимость <IoArrowForwardCircleOutline />
          </button>
        </div>
        <div className={styles.container__countSlide}>
          <div id="0"></div>
          <div id="1"></div>
          <div id="2"></div>
          <div id="3"></div>
        </div>
      </div>
    </div>
  );
}

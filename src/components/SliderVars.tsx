import styles from "../styles/SliderVars.module.scss";
import { useState, useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { LuPackage } from "react-icons/lu";
function getWindowSize() {
  const width = window.innerWidth;
  return width;
}
export default function SliderVars() {
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
  const [firstSlide, setFirstSlide] = useState(0);
  const [secondSlide, setSecondSlide] = useState(1);
  const [threeSlide, setThreeSlide] = useState(2);
  const items = [
    {
      photo: "url('/public/photoVars/5.png')",
      name: "Авто - обычная",
      days: "9-15 дней",
      weight: "от 5кг",
      price: "2,5",
    },
    {
      photo: "url('/public/photoVars/4.png')",
      name: "Авто - ускоренная",
      days: "9-12 дней",
      weight: "от 5кг",
      price: "5",
    },
    {
      photo: "url('/public/photoVars/3.png')",
      name: "Авиа",
      days: "5-10 дней",
      weight: "от 5кг",
      price: "10",
    },
    {
      photo: "url('/public/photoVars/2.png')",
      name: "Ж/д",
      days: "7-10 дней",
      weight: "от 5кг",
      price: "10",
    },
    {
      photo: "url('/public/photoVars/1.png')",
      name: "Море",
      days: "5-10 дней",
      weight: "от 5кг",
      price: "10",
    },
  ];

  if (windowSize < 1000) {
    setTimeout(function tick() {
      if (firstSlide == 4) {
        setFirstSlide(0);
      } else setFirstSlide(firstSlide + 1);
    }, 2500);
  }

  const changeSliderUp = () => {
    if (firstSlide == 0) {
      setFirstSlide(1);
      setSecondSlide(2);
      setThreeSlide(3);
    } else if (firstSlide == 1) {
      setFirstSlide(2);
      setSecondSlide(3);
      setThreeSlide(4);
    } else if (firstSlide == 2) {
      setFirstSlide(3);
      setSecondSlide(4);
      setThreeSlide(0);
    } else if (firstSlide == 3) {
      setFirstSlide(4);
      setSecondSlide(0);
      setThreeSlide(1);
    } else if (firstSlide == 4) {
      setFirstSlide(0);
      setSecondSlide(1);
      setThreeSlide(2);
    }
  };
  const changeSliderDown = () => {
    if (firstSlide == 0) {
      setFirstSlide(4);
      setSecondSlide(0);
      setThreeSlide(1);
    } else if (firstSlide == 4) {
      setFirstSlide(3);
      setSecondSlide(4);
      setThreeSlide(0);
    } else if (firstSlide == 3) {
      setFirstSlide(2);
      setSecondSlide(3);
      setThreeSlide(4);
    } else if (firstSlide == 2) {
      setFirstSlide(1);
      setSecondSlide(2);
      setThreeSlide(3);
    } else if (firstSlide == 1) {
      setFirstSlide(0);
      setSecondSlide(1);
      setThreeSlide(2);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h1>Варианты доставки грузов из Китая</h1>
        <div className={styles.container__line}></div>
        <div className={styles.container__slider}>
          <div className={styles.slider__arrs}>
            <MdArrowBackIos onClick={() => changeSliderDown()} />
            <MdArrowForwardIos onClick={() => changeSliderUp()} />
          </div>
          <div className={styles.slider__items}>
            <div className={styles.item}>
              <div
                className={styles.item__photo}
                style={{ backgroundImage: items[firstSlide].photo }}
              ></div>
              <h1>{items[firstSlide].name}</h1>
              <div>
                <div>
                  <CiCalendarDate />
                  {items[firstSlide].days}{" "}
                </div>
                <div>
                  <LuPackage /> {items[firstSlide].weight}{" "}
                </div>
              </div>
              <div className={styles.item__price}>
                <span>от</span>
                <h1>{items[firstSlide].price}</h1>
                <span>$/кг</span>
              </div>
              <div className={styles.buttonsBar}>
                <a href="#calculator">Оставить заявку</a>
                <a>Подробнее</a>
              </div>
            </div>
            <div className={styles.item}>
              <div
                className={styles.item__photo}
                style={{ backgroundImage: items[secondSlide].photo }}
              ></div>
              <h1>{items[secondSlide].name}</h1>
              <div>
                <div>
                  <CiCalendarDate />
                  {items[secondSlide].days}{" "}
                </div>
                <div>
                  <LuPackage /> {items[secondSlide].weight}{" "}
                </div>
              </div>
              <div className={styles.item__price}>
                <span>от</span>
                <h1>{items[secondSlide].price}</h1>
                <span>$/кг</span>
              </div>
              <div className={styles.buttonsBar}>
                <a href="#calculator">Оставить заявку</a>
                <a>Подробнее</a>
              </div>
            </div>
            <div className={styles.item}>
              <div
                className={styles.item__photo}
                style={{ backgroundImage: items[threeSlide].photo }}
              ></div>
              <h1>{items[threeSlide].name}</h1>
              <div>
                <div>
                  <CiCalendarDate />
                  {items[threeSlide].days}{" "}
                </div>
                <div>
                  <LuPackage /> {items[threeSlide].weight}{" "}
                </div>
              </div>
              <div className={styles.item__price}>
                <span>от</span>
                <h1>{items[threeSlide].price}</h1>
                <span>$/кг</span>
              </div>
              <div className={styles.buttonsBar}>
                <a href="#calculator">Оставить заявку</a>
                <a>Подробнее</a>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

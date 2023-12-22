import React, { useCallback, useState } from "react";
import styles from "../styles/SliderVars.module.scss";
import { CiCalendarDate } from "react-icons/ci";
import { LuPackage } from "react-icons/lu";
export default function Item() {
  const [firstSlide, setFirstSlide] = useState(0);
  const [secondSlide, setSecondSlide] = useState(1);
  const [threeSlide, setThreeSlide] = useState(1);
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

  

  return (
    <>
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
          <button>Оставить заявку</button>
          <button>Подробнее</button>
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
          <button>Оставить заявку</button>
          <button>Подробнее</button>
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
          <button>Оставить заявку</button>
          <button>Подробнее</button>
        </div>
      </div>{" "}
    </>
  );
}

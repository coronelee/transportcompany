import {useState} from "react";
import styles from "../styles/Services.module.scss";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
export default function () {
const [firstSlide, setFirstSlide] = useState(0);
  const [secondSlide, setSecondSlide] = useState(1);
  const [threeSlide, setThreeSlide] = useState(2);
  const sliderItems = [
    {
      photo: "url('/public/services/serv(4).png')",
      h1: "Выкуп товара",
      h3: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. ",
    },
    {
      photo: "url('/public/services/serv(3).png')",
      h1: "Страховка груза",
      h3: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. ",
    },
    {
      photo: "url('/public/services/serv(2).png')",
      h1: "Аренда склада",
      h3: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. ",
    },
    {
      photo: "url('/public/services/serv(1).png')",
      h1: "Перевод денежных средств",
      h3: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. ",
    },
  ];

  const changeSliderUp = () => {
    if (firstSlide == 0) {
      setFirstSlide(1);
      setSecondSlide(2);
      setThreeSlide(3);
    } else if (firstSlide == 1) {
      setFirstSlide(2);
      setSecondSlide(3);
      setThreeSlide(0);
    } else if (firstSlide == 2) {
      setFirstSlide(3);
      setSecondSlide(0);
      setThreeSlide(1);
    } else if (firstSlide == 3) {
      setFirstSlide(0);
      setSecondSlide(1);
      setThreeSlide(2);
    }
  };
  const changeSliderDown = () => {
    if(firstSlide == 0){
      setFirstSlide(3)
      setSecondSlide(0)
      setThreeSlide(1)
    } else if(firstSlide == 3){
      setFirstSlide(2)
      setSecondSlide(3)
      setThreeSlide(0)
    }else if(firstSlide == 2){
      setFirstSlide(1)
      setSecondSlide(2)
      setThreeSlide(3)
    }else if(firstSlide == 1){
      setFirstSlide(0)
      setSecondSlide(1)
      setThreeSlide(2)
    }
  };
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h1>Услуги</h1>
        <div className={styles.line}></div>
        <div className={styles.container__slider}>
        <div className={styles.slider__arrs}>
            <MdArrowBackIos onClick={() => changeSliderDown()} />
            <MdArrowForwardIos onClick={() => changeSliderUp()} />
          </div>
          <div className={styles.item__slider} style={{backgroundImage: sliderItems[firstSlide].photo}}>
            <h1>{sliderItems[firstSlide].h1}</h1>
            <h3>{sliderItems[firstSlide].h3}</h3>
            <button>Подробнее</button>
          </div>
          <div className={styles.item__slider}  style={{backgroundImage: sliderItems[secondSlide].photo}}>
            <h1>{sliderItems[secondSlide].h1}</h1>
            <h3>{sliderItems[secondSlide].h3}</h3>
            <button>Подробнее</button>
          </div>
          <div className={styles.item__slider}  style={{backgroundImage: sliderItems[threeSlide].photo}}>
            <h1>{sliderItems[threeSlide].h1}</h1>
            <h3>{sliderItems[threeSlide].h3}</h3>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import styles from "../styles/CalculetedSumm.module.scss";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
export default function CalculatedSumm() {
  const [countStep, setCountStep] = useState(0);

  const count = (count: number) => {
    console.log(count);
    if (count == 2) {
      setCountStep(countStep + 1);
      let elemetys: any = document.getElementById("calc");
      elemetys.style.backgroundColor = "transparent";
      elemetys.style.boxShadow = "none";
      elemetys = document.getElementById("title");
      elemetys.style.display = "none";
      elemetys = document.getElementById("steps");
      elemetys.style.display = "none";
    } else {
      setCountStep(countStep + 1);
    }
  };
  
  const sliderUP = (item: number) => {
    if (item == 0) {
      let element: any = document.getElementById("step" + 2);
      element.style.backgroundColor = "rgba(137, 194, 73, 1)";
      element = document.getElementById("step" + 1);
      element.style.backgroundColor = "rgba(40, 43, 56, 1);";
      element = document.getElementById("step" + 3);
      element.style.backgroundColor = "rgba(40, 43, 56, 1);";
    } else if (item == 1) {
      let element: any = document.getElementById("step" + 3);
      element.style.backgroundColor = "rgba(137, 194, 73, 1)";
      element = document.getElementById("step" + 1);
      element.style.backgroundColor = "rgba(40, 43, 56, 1);";
      element = document.getElementById("step" + 2);
      element.style.backgroundColor = "rgba(40, 43, 56, 1);";
    } else if (item == 2) {
      let element: any = document.getElementById("step" + 1);
      element.style.backgroundColor = "rgba(137, 194, 73, 1)";
      element = document.getElementById("step" + 3);
      element.style.backgroundColor = "rgba(40, 43, 56, 1);";
      element = document.getElementById("step" + 2);
      element.style.backgroundColor = "rgba(40, 43, 56, 1);";
    }
  };

  const nextStep = () => {
    count(countStep);
    sliderUP(countStep);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h1 id="title">Получить рассчет стоимости доставки вашего груза</h1>
        <div className={styles.container__content}>
          <div className={styles.content__calculator} id="calc">
            <div className={styles.calculator__steps} id="steps">
              <div
                id="step1"
                style={{ backgroundColor: "rgba(137, 194, 73, 1)" }}
              >
                1
              </div>
              <div id="step2">2</div>
              <div id="step3">3</div>
            </div>
            {countStep == 0 ? (
              <>
                <div className={styles.calculator__grid}>
                  <div>
                    <h3>Категория товара:</h3>
                    <input type="text" />
                  </div>
                  <div>
                    <h3>Стоимость груза:</h3>
                    <input type="text" />
                  </div>
                  <div>
                    <h3>Вес груза (кг):</h3>
                    <input type="text" />
                  </div>
                  <div>
                    <h3>Объем груза (м3):</h3>
                    <input type="text" />
                  </div>
                  <div className={styles.checkboxes}>
                    <div>
                      <input type="checkbox" />
                      <span>Страховка</span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>Таможенное оформление</span>
                    </div>
                  </div>
                  <div>
                    <h3>Код ТН ВЭД:</h3>
                    <input type="text" />
                  </div>
                </div>
                <div className={styles.uploadImage}>
                  <div className={styles.spans}>
                    <span>фотография.jpeg</span>
                    <a href="">Удалить фото</a>
                  </div>
                  <button>Загрузить фото товара</button>
                </div>
                <button
                  className={styles.button__nextStep}
                  onClick={() => nextStep()}
                >
                  Следующий шаг <IoArrowForwardCircleOutline />
                </button>
              </>
            ) : (
              <></>
            )}

            {countStep == 1 ? (
              <div className={styles.calculator__secStep}>
                <h1>Рассчитать объем</h1>
                <div>
                  <h4>Единица измерения:</h4>
                  <input type="text" />
                </div>
                <div>
                  <h4>Длина:</h4>
                  <input type="text" />
                </div>
                <div>
                  <h4>Ширина:</h4>
                  <input type="text" />
                </div>
                <div>
                  <h4>Высота:</h4>
                  <input type="text" />
                </div>
                <button
                  className={styles.button__nextStep}
                  onClick={() => nextStep()}
                >
                  Рассчитать <IoArrowForwardCircleOutline />
                </button>
              </div>
            ) : (
              ""
            )}
            {countStep == 2 ? (
              <div className={styles.calculator__threeStep}>
                <h1>Оставьте заявку</h1>
                <h5>
                  Заполните заявку, сообщите наименование товара/груза и наш
                  специалист свяжется с Вами в рабочее время.
                </h5>
                <div>
                  <h4>Имя:</h4>
                  <input type="text" placeholder="Ваше имя *" />
                </div>
                <div className={styles.contacts}>
                  <div>
                    <h4>Номер телефона:</h4>
                    <input type="text" placeholder="+7 (___) ___ - __ - __ *" />
                  </div>
                  <div>
                    <h4>Email:</h4>
                    <input type="text" placeholder="Введите e-mail *" />
                  </div>
                </div>
                <div>
                  <h4>Примечание:</h4>
                  <textarea
                    style={{ height: 70 }}
                    placeholder="Сообщите здесь наименование товара/груза, количество или примерный вес, а так же укажите вопросы которые вас интересуют *"
                  />
                </div>
                <h5>* - обязательные поля</h5>
                <button
                  className={styles.button__nextStep}
                  onClick={() => nextStep()}
                >
                  Рассчитать <IoArrowForwardCircleOutline />
                </button>
              </div>
            ) : (
              ""
            )}
            {countStep == 3 ? (
              <div className={styles.final}>
                <h1>Получить рассчет стоимости доставки вашего груза</h1>
                <IoIosCheckmarkCircleOutline />
                <h1>Спасибо за заявку!</h1>
                <h3>Мы обязатальено свяжемся с вами.</h3>
                <h2>Так же для вас может быть полезно:</h2>
                <ul>
                  <li>Услуги</li>
                  <li>Примеры грузоперевозок</li>
                  <li>Поиск товаров в Китае</li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.content__image}></div>
        </div>
      </div>
    </div>
  );
}

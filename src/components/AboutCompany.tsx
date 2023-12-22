import { useState } from "react";
import styles from "../styles/AboutCompany.module.scss";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function AboutCompany() {
  const [queOpen1, setQueOpen1] = useState(false);
  const [queOpen2, setQueOpen2] = useState(false);
  const [queOpen3, setQueOpen3] = useState(false);
  const [queOpen4, setQueOpen4] = useState(false);
  const [queOpen5, setQueOpen5] = useState(false);
  const [queOpen6, setQueOpen6] = useState(false);

  const openQue = (idQue: number) => {
    switch (idQue) {
      case 1:
        setQueOpen1(!queOpen1);
        break;
      case 2:
        setQueOpen2(!queOpen2);
        break;
      case 3:
        setQueOpen3(!queOpen3);
        break;
      case 4:
        setQueOpen4(!queOpen4);
        break;
      case 5:
        setQueOpen5(!queOpen5);
        break;
      case 6:
        setQueOpen6(!queOpen6);
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.container__about}>
          <div className={styles.about__text}>
            <h1>О компании</h1>
            <div className={styles.about__textLine}></div>
            <h3>
              Компания Азия Карго - это полный комплекс логистических услуг по
              доставке грузов из Китая в Россию - сборные грузы и цельные
              товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. Для
              вашего удобства есть тарифы на лёгкий и тяжелый куб. Мы работаем
              на рынке более 4 лет, а руководители компании занимаются
              логистикой уже более 11 лет. <br /> <br /> Мы стремимся
              предоставить лучшие условия доставки и лучший сервис своим
              клиентам. Выбирая нас - вы выбираете качественную доставку
              оптимальную по цене и времени! Убедитесь в этом сами!
            </h3>
          </div>
          <div className={styles.about__photo}>
            <img src="/public/img.png" alt="" />
          </div>
        </div>
        <div className={styles.container__que}>
          <h1>Часто задаваемые вопросы</h1>
          <div className={styles.que__Line}></div>
          <div className={styles.que__flexblock}>
            <div className={styles.flexBlock__que}>
              <div
                className={
                  queOpen1 ? styles.que__item__active : styles.que__item
                }
              >
                <div>
                  <h1>Как рассчитывается стоимость доставки?</h1>
                  <IoArrowForwardCircleOutline onClick={() => openQue(1)} />
                </div>
                {queOpen1 ? (
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt harum porro, atque in hic eum itaque perferendis
                    consequuntur tenetur ipsa eligendi labore. Ipsa doloremque
                    ducimus id necessitatibus ratione numquam at?
                  </h3>
                ) : (
                  ""
                )}
              </div>
              <div
                className={
                  queOpen2 ? styles.que__item__active : styles.que__item
                }
              >
                <div>
                  <h1>Как происходит оплата за доставку груза?</h1>
                  <IoArrowForwardCircleOutline onClick={() => openQue(2)} />
                </div>
                {queOpen2 ? (
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt harum porro, atque in hic eum itaque perferendis
                    consequuntur tenetur ipsa eligendi labore. Ipsa doloremque
                    ducimus id necessitatibus ratione numquam at?
                  </h3>
                ) : (
                  ""
                )}
              </div>
              <div
                className={
                  queOpen3 ? styles.que__item__active : styles.que__item
                }
              >
                <div>
                  <h1>
                    Как быстро оформить заказ на доставку из Китая в Россию?
                  </h1>
                  <IoArrowForwardCircleOutline onClick={() => openQue(3)} />
                </div>
                {queOpen3 ? (
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt harum porro, atque in hic eum itaque perferendis
                    consequuntur tenetur ipsa eligendi labore. Ipsa doloremque
                    ducimus id necessitatibus ratione numquam at?
                  </h3>
                ) : (
                  ""
                )}
              </div>
              <div
                className={
                  queOpen4 ? styles.que__item__active : styles.que__item
                }
              >
                <div>
                  <h1>Можно ли через вас оплатить товар поставщику?</h1>
                  <IoArrowForwardCircleOutline onClick={() => openQue(4)} />
                </div>
                {queOpen4 ? (
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt harum porro, atque in hic eum itaque perferendis
                    consequuntur tenetur ipsa eligendi labore. Ipsa doloremque
                    ducimus id necessitatibus ratione numquam at?
                  </h3>
                ) : (
                  ""
                )}
              </div>
              <div
                className={
                  queOpen5 ? styles.que__item__active : styles.que__item
                }
              >
                <div>
                  <h1>В чём особенность КАРГО доставки из Китая</h1>
                  <IoArrowForwardCircleOutline onClick={() => openQue(5)} />
                </div>
                {queOpen5 ? (
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt harum porro, atque in hic eum itaque perferendis
                    consequuntur tenetur ipsa eligendi labore. Ipsa doloremque
                    ducimus id necessitatibus ratione numquam at?
                  </h3>
                ) : (
                  ""
                )}
              </div>
              <div
                className={
                  queOpen6 ? styles.que__item__active : styles.que__item
                }
              >
                <div>
                  <h1>Какой срок доставки из Китая?</h1>
                  <IoArrowForwardCircleOutline onClick={() => openQue(6)} />
                </div>
                {queOpen6 ? (
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt harum porro, atque in hic eum itaque perferendis
                    consequuntur tenetur ipsa eligendi labore. Ipsa doloremque
                    ducimus id necessitatibus ratione numquam at?
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className={styles.block__goReg}>
            <h1>Готовы к сотрудничеству?</h1>
            <h3>Зарегистрируйте груз!</h3>
            <div className={styles.goReg__Line}></div>
            <div className={styles.goReg__grid}>
              <span>
                • Для того, чтобы начать сотрудничество, необходимо оформить
                груз указав информацию о содержимом груза, его стоимость и
                количество. А так-же прикрепив фотографии к заявке.
                <br />
                <br />
                • Если требуется проверка товара на соответсвие количеству, то
                при оформлении груза на нашем сайте укажите это в графе
                "Примечание". Данная услуга платная и составляет 3 юаня за одну
                позицию в заказе. Любые дополнительные проверки груза
                обсуждаются индивидуально в том числе и их стоимость.
                <br />
                <br />• До отправки груза на наш склад в Китае обязательно
                позаботьтесь о том, чтобы сделать маркировку, с номером Вашего
                заказа у нас на сайте, для каждой внешней коробки, чтобы мы
                смогли определить именно Ваш груз. Если у Вас нет возможности
                сделать это самостоятельно, то попросите об этом своего
                поставщика.
              </span>
              <div className={styles.photo}></div>
              <div className={styles.photo}></div>
              <span>
                • После отправки груза на наш склад в Китае, Вам обязательно
                нужно указать трек-номер для отслеживания посылок по Китаю для
                каждой позиции в заказе. Внести трек-номер можно на странице
                заказа. Трек-номер - это ещё одна мера для идентификации Вашего
                груза на нашем складе. <br /><br /> • Если Вы оформили груз по нашей
                инструкции и сделали все правильно, то при получении Вашего
                груза на складе в Китае статус заказа изменится на "На складе".
                <button>Оформить груз <IoArrowForwardCircleOutline/></button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

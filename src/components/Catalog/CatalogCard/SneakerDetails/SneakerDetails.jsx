import React, { useState } from 'react';
import styles from './SneakerDetails.module.scss';
import { IoIosClose } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { addOrder } from '../../../../Redux/ordersSlice';
import GALKA from '../../../../img/galka.png';
import STARS from '../../../../img/stars.png';

export default function SneakerDetails({
  currentSneaker,
  setIsSneakerDetailsModalOpen,
}) {
  // const sizeOptions = [35, 36, 37, 38, 39, 40, 41, 42, 43];
  const [selectedSizeInModal, setSelectedSizeInModal] = useState(null);

  const closeSneakerDetailsModal = () => {
    setIsSneakerDetailsModalOpen(false);
    setSelectedSizeInModal(null);
  };

  const { sizeOptions } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const addToCart = () => {
    if (selectedSizeInModal) {
      dispatch(
        addOrder({ sneakers: currentSneaker, size: selectedSizeInModal })
      );
      closeSneakerDetailsModal();
    } else {
      alert('Пожалуйста, выберите размер');
    }
  };

  return (
    <div className={styles.modalCard}>
      <div className={styles.modalCardContent}>
        <div className={styles.modalCardHeader}>
          <img
            src={currentSneaker.img}
            alt={currentSneaker.name}
            className={styles.modalCardImage}
          />
          <div className={styles.modalCardInfo}>
            <div className={styles.modalCardData}>
              <p className={styles.article}>
                Артикул: {currentSneaker.article} 131313234
              </p>
              <p className={styles.stock}>
                В наличии <span>{currentSneaker.stock} 13 шт.</span>
              </p>
            </div>
            <h2 className={styles.modalCardTitle}>{currentSneaker.name}</h2>
            <img src={STARS} alt="Рейтинг" className={styles.modalCardRating} />
            <p className={styles.sizePrompt}>Выберите размер</p>
            <div className={styles.sizeOptions}>
              {sizeOptions.map((size) => {
                const isAvailable = currentSneaker.size.includes(size);
                return (
                  <div
                    key={size}
                    className={`${styles.sizeOption} ${
                      isAvailable ? styles.available : styles.unavailable
                    } ${size === selectedSizeInModal ? styles.selected : ''}`}
                    onClick={() => isAvailable && setSelectedSizeInModal(size)}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
            <p className={styles.modalCardPrice}>
              Цена: {currentSneaker.price} руб.
            </p>
            <button className={styles.orderButton} onClick={addToCart}>
              Заказать
            </button>
            <div className={styles.modalCardBonus}>
              <div className={styles.benefit}>
                <img src={GALKA} alt="Галочка" />
                <p>Бесплатная доставка до двери</p>
              </div>
              <div className={styles.benefit}>
                <img src={GALKA} alt="Галочка" />
                <p>Оплата заказа при получении</p>
              </div>
              <div className={styles.benefit}>
                <img src={GALKA} alt="Галочка" />
                <p>Обмен в течение двух недель</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modalCardDetails}>
          <div className={styles.description}>
            <h3>Описание</h3>
            <p>
              {currentSneaker.description}
              Кроссовки Nike Blazer Mid '77 Vintage Suede с винтажной подошвой
              возрождают стиль баскетбольных моделей Nike прошлого, создавая
              впечатление, что они хранились в шкафу долгие годы.
            </p>
          </div>
          <div className={styles.specifications}>
            <h3>Характеристики</h3>
            <ul>
              <li>Пол: {currentSneaker.gender}</li>
              <li>Цвета: {currentSneaker.colors} Разноцветный </li>
              <li>Состав: {currentSneaker.material} Кожа, текстиль, резина</li>
              <li>Страна: {currentSneaker.country} Вьетнам</li>
            </ul>
          </div>
        </div>

        <button
          className={styles.closeModalCardButton}
          onClick={closeSneakerDetailsModal}
        >
          <IoIosClose size={40} color="gray" />
        </button>
      </div>
    </div>
  );
}

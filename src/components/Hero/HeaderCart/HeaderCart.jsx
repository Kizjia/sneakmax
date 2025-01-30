import React, { useState } from 'react';
import styles from './HeaderCart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosClose } from 'react-icons/io';
import { FaRegTrashAlt } from 'react-icons/fa';
import { deleteOrder } from '../../../Redux/ordersSlice';
import Cart from '../../Cart/Cart';

export default function HeaderCart({
  setOpenCartModal,
  setIsCartFullScreen,
  isCartFullScreen,
}) {
  const { orders } = useSelector((state) => state.orders);
  // const [isCartFullScreen, setIsCartFullScreen] = useState(false); // Состояние полноэкранной корзины

  const dispatch = useDispatch();

  const closeHeaderCartModal = () => {
    setOpenCartModal(false);

    console.log('closeHeaderCartModal');
  };

  const deleteSneakersOrder = (sneakers, size) => {
    dispatch(deleteOrder({ sneakers, size }));
  };

  const openFullScreenCart = () => {
    setIsCartFullScreen(true); // Открываем корзину на весь экран
    setOpenCartModal(false); // Закрываем модальное окно
    console.log('openFullScreenCart');
  };

  return (
    <>
      {!isCartFullScreen && (
        <>
          <div
            className={styles.overlay}
            onClick={(e) => {
              e.stopPropagation();
              closeHeaderCartModal();
            }} // Закрытие корзины при клике на фон
          ></div>
          <div className={styles.headerCart}>
            {orders.length > 0 ? (
              <div className={styles.sneakersCart}>
                {orders.map(({ sneakers, size }) => (
                  <div key={sneakers.id} className={styles.orderItem}>
                    <div className={styles.imageWrapper}>
                      <img
                        src={sneakers.img}
                        alt={sneakers.name}
                        className={styles.orderImage}
                      />
                    </div>
                    <div className={styles.orderDetails}>
                      <p className={styles.name}>{sneakers.name}</p>
                      <p className={styles.size}>Размер: {size}</p>
                      <p className={styles.price}>{sneakers.price} ₽</p>
                    </div>
                    <button
                      className={styles.trash}
                      onClick={(e) => {
                        deleteSneakersOrder(sneakers, size);
                      }}
                    >
                      <FaRegTrashAlt size={20} color="gray" />
                    </button>
                  </div>
                ))}

                <div className={styles.totalPrice}>
                  <div className={styles.sumWrapper}>
                    <p className={styles.sumTitle}>Итого:</p>
                    <p className={styles.sum}>
                      {orders.reduce(
                        (acc, { sneakers }) => acc + sneakers.price,
                        0
                      )}{' '}
                      ₽
                    </p>
                  </div>
                  <button
                    className={styles.goCartButton}
                    onClick={(e) => {
                      openFullScreenCart();
                    }}
                  >
                    Перейти в корзину
                  </button>
                </div>
              </div>
            ) : (
              <p className={styles.emptyCartTitle}>Корзина пуста</p>
            )}

            {/* <button
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                closeHeaderCartModal();
              }}
            >
              <IoIosClose size={20} />
            </button> */}
          </div>
        </>
      )}

      {isCartFullScreen && (
        <Cart handleIsFullScreenCart={setIsCartFullScreen} />
      )}
    </>
  );
}

import React, { useState } from 'react';
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, saveCompletedOrder } from '../../Redux/ordersSlice';

export default function Cart({ handleIsFullScreenCart }) {
  const { orders } = useSelector((state) => state.orders);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const dispatch = useDispatch();

  const deleteSneakersOrder = (sneakers, size) => {
    dispatch(deleteOrder({ sneakers, size }));
    if (orders.length === 1) {
      closeFullScreenCart();
    }
  };

  const closeFullScreenCart = () => {
    handleIsFullScreenCart(false); // Закрываем полноэкранную корзину
  };

  const completeOrder = () => {
    dispatch(
      saveCompletedOrder({ orderDetails: orders, customerInfo: formData })
    );
    setFormData({ name: '', phone: '', email: '' }); // Сброс формы
    handleIsFullScreenCart(false); // Закрыть корзину после оформления
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.email.trim() !== '' &&
      orders.length > 0
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div
        className={styles.overlay}
        onClick={(e) => {
          e.stopPropagation();
          closeFullScreenCart();
        }} // Закрытие корзины при клике на фон
      ></div>

      <div className={styles.fullScreenCart}>
        <div className={styles.title}>
          <h3 className={styles.titleIntro}>Оформление заказа</h3>
          <p className={styles.titleText}>Заказ 3456 67</p>
        </div>
        <div className={styles.cartWrapper}>
          <p className={styles.orderCount}>
            Товаров в заказе:{' '}
            <span className={styles.count}>{orders.length} шт</span>
          </p>
          <p className={styles.totalAmount}>
            Общая сумма заказа:{' '}
            <span className={styles.amount}>
              {orders.reduce((acc, { sneakers }) => acc + sneakers.price, 0)} ₽
            </span>
          </p>

          <div className={styles.orderComposition}>
            <p className={styles.orderTitle}>Состав заказа</p>
            <div className={styles.sneakersCart}>
              {orders.map(({ sneakers, size }) => (
                <div
                  key={`${sneakers.id}-${size}`}
                  className={styles.orderItem}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={sneakers.img}
                      alt={sneakers.name}
                      className={styles.orderImage}
                    />
                  </div>
                  <div className={styles.orderDetails}>
                    <p className={styles.name}>{sneakers.name}</p>
                    <p className={styles.price}>{sneakers.price} ₽</p>
                  </div>
                  <button
                    className={styles.trash}
                    onClick={() => {
                      deleteSneakersOrder(sneakers, size);
                    }}
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            completeOrder(); // Вызываем функцию оформления заказа
          }}
          className={styles.form}
        >
          <input
            type="text"
            placeholder="Ваше имя"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Номер телефона"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={!isFormValid()}>
            Оформить заказ
          </button>
        </form>
      </div>
    </>
  );
}

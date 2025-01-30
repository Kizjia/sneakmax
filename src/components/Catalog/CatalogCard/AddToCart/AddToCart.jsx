import React, { useState } from 'react';
import styles from './AddToCart.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addOrder } from '../../../../Redux/ordersSlice';

export default function AddToCart({ setIsModalAddToCartOpen, currentSneaker }) {
  const [selectedSizeInModal, setSelectedSizeInModal] = useState(null);

  const { sizeOptions } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const closeAddToCartModal = () => {
    setIsModalAddToCartOpen(false);
    setSelectedSizeInModal(null);
  };

  const addToCart = () => {
    if (selectedSizeInModal) {
      dispatch(
        addOrder({ sneakers: currentSneaker, size: selectedSizeInModal })
      );
      closeAddToCartModal();
    } else {
      alert('Пожалуйста, выберите размер');
    }
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3>ВЫБЕРИТЕ РАЗМЕР</h3>
        <div className={styles.allSizes}>
          {sizeOptions.map((size) => {
            const isAvailable = currentSneaker.size.includes(size);
            return (
              <div
                key={size}
                className={`${styles.size} ${
                  isAvailable ? styles.available : styles.unavailable
                } ${size === selectedSizeInModal ? styles.selected : ''}`}
                onClick={() => isAvailable && setSelectedSizeInModal(size)}
              >
                {size}
              </div>
            );
          })}
        </div>
        <div className={styles.modalActions}>
          <button className={styles.closeButton} onClick={closeAddToCartModal}>
            Закрыть
          </button>
          <button className={styles.addToCartButton} onClick={addToCart}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
}

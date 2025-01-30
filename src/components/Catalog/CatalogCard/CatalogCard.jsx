import React, { useState } from 'react';
import styles from './CatalogCard.module.scss';

import { FaEye } from 'react-icons/fa';
import { BsFillBasket3Fill } from 'react-icons/bs';

import AddToCart from './AddToCart/AddToCart';
import SneakerDetails from './SneakerDetails/SneakerDetails';

export default function CatalogCard({ displayedSneakers, sneakersList }) {
  const [isModalAddToCartOpen, setIsModalAddToCartOpen] = useState(false);
  const [isSneakerDetailsModalOpen, setIsSneakerDetailsModalOpen] =
    useState(false);

  const [currentSneaker, setCurrentSneaker] = useState(null);

  // Добавить в корзину
  const openAddToCartModal = (sneaker) => {
    setCurrentSneaker(sneaker);
    setIsModalAddToCartOpen(true);
  };

  //Открыть карточку
  const openSneakerDetailsModal = (sneaker) => {
    setCurrentSneaker(sneaker);
    setIsSneakerDetailsModalOpen(true);
  };

  return (
    <div className={styles.products}>
      {displayedSneakers[0] !== 'По данным параметрам ничего не найдено' ? (
        <div className={styles.gridProducts}>
          {displayedSneakers.map((sneaker) => (
            <div key={sneaker.id} className={styles.productCard}>
              <img
                src={sneaker.img}
                alt={sneaker.name}
                className={styles.productImage}
              />
              <div className={styles.overlay}>
                <button
                  className={styles.addToCartButton}
                  onClick={() => openAddToCartModal(sneaker)}
                >
                  <BsFillBasket3Fill size={20} />
                </button>

                <button
                  className={styles.openCardButton}
                  onClick={() => openSneakerDetailsModal(sneaker)}
                >
                  <FaEye size={20} />
                </button>
              </div>

              <h3 className={styles.productName}>{sneaker.name}</h3>
              <p className={styles.productPrice}>{sneaker.price} руб.</p>
            </div>
          ))}
        </div>
      ) : (
        <p>{displayedSneakers[0]}</p>
      )}

      {/* {displayedSneakers.length === sneakersList.length && (
        <button className={styles.showMore}>Показать ещё</button>
      )} */}

      {isModalAddToCartOpen && (
        <AddToCart
          setIsModalAddToCartOpen={setIsModalAddToCartOpen}
          currentSneaker={currentSneaker}
        />
      )}

      {isSneakerDetailsModalOpen && (
        <SneakerDetails
          currentSneaker={currentSneaker}
          setIsSneakerDetailsModalOpen={setIsSneakerDetailsModalOpen}
        />
      )}
    </div>
  );
}

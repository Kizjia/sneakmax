import React, { useEffect, useState } from 'react';
import styles from './Catalog.module.scss';
import SHOES from '../../img/shoes.png';
import CatalogCard from './CatalogCard/CatalogCard';

import { useSelector, useDispatch } from 'react-redux';
import { getSneakers, getSizeOptions } from '../../Redux/ordersSlice';

export default function Catalog() {
  const [priceRange, setPriceRange] = useState({ min: 1850, max: 25768 });
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [genderFilter, setGenderFilter] = useState({
    male: false,
    female: false,
  });
  const [filteredSneakers, setFilteredSneakers] = useState([]);

  const { sizeOptions, sneakersList, orders, loading, error } = useSelector(
    (state) => state.orders
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSneakers());
    dispatch(getSizeOptions());
  }, [dispatch]);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange({ ...priceRange, [name]: +value });
  };

  const toggleSizeSelection = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleGenderFilter = (gender) => {
    setGenderFilter((prev) => ({ ...prev, [gender]: !prev[gender] }));
  };

  const applyFilters = () => {
    console.log('in applyFilters');
    console.log(priceRange, genderFilter, selectedSizes);
    let filtered = sneakersList;

    // Фильтр по цене
    filtered = filtered.filter(
      (sneaker) =>
        sneaker.price >= priceRange.min && sneaker.price <= priceRange.max
    );

    // Фильтр по полу
    if (genderFilter.male || genderFilter.female) {
      filtered = filtered.filter((sneaker) => genderFilter[sneaker.gender]);
    }

    // Фильтр по размерам
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((sneaker) =>
        sneaker.size.some((size) => selectedSizes.includes(size))
      );
      if (filtered.length === 0) {
        filtered = ['По данным параметрам ничего не найдено'];
      }
    }
    console.log(filtered);

    setFilteredSneakers(filtered);
  };

  const resetFilters = () => {
    setPriceRange({ min: 1850, max: 25768 });
    setSelectedSizes([]);
    setGenderFilter({ male: false, female: false });
    setFilteredSneakers(sneakersList);
  };

  const displayedSneakers =
    filteredSneakers.length > 0 ? filteredSneakers : sneakersList;

  return (
    <section id="catalog" className={styles.catalog}>
      <div className={styles.container}>
        <h1 className={styles.title}>Каталог</h1>

        <div className={styles.catalogContainer}>
          <form className={styles.filter} onSubmit={(e) => e.preventDefault()}>
            <h3 className={styles.text}>
              <span>Подбор</span>
              <br />
              <span>по параметрам</span>
            </h3>
            <div className={styles.priceFilter}>
              <p>Цена, руб.</p>
              <div className={styles.priceRange}>
                <input
                  type="number"
                  name="min"
                  value={priceRange.min}
                  onChange={handlePriceChange}
                  min="1850"
                  max="25768"
                />
                <input
                  type="number"
                  name="max"
                  value={priceRange.max}
                  onChange={handlePriceChange}
                  min="1850"
                  max="25768"
                />
              </div>
            </div>

            <div className={styles.genderFilter}>
              <p>Пол</p>
              <div className={styles.genderCheckbox}>
                <label>
                  <input
                    type="checkbox"
                    checked={genderFilter.male}
                    onChange={() => toggleGenderFilter('male')}
                  />
                  Мужской
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={genderFilter.female}
                    onChange={() => toggleGenderFilter('female')}
                  />
                  Женский
                </label>
              </div>
            </div>

            <div className={styles.sizeFilter}>
              <p>Размер</p>
              <div className={styles.sizes}>
                {sizeOptions.map((size) => (
                  <div
                    key={size}
                    className={`${styles.size} ${
                      selectedSizes.includes(size) ? styles.selected : ''
                    }`}
                    onClick={() => toggleSizeSelection(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <button className={styles.applyButton} onClick={applyFilters}>
              Применить
            </button>
            <button
              className={styles.resetButton}
              onClick={resetFilters}
              type="button"
            >
              Сбросить
            </button>
          </form>

          <CatalogCard
            displayedSneakers={displayedSneakers}
            sneakersList={sneakersList}
          />
        </div>
      </div>
    </section>
  );
}

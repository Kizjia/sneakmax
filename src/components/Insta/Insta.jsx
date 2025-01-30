import React, { useState } from 'react';
import styles from './Insta.module.scss';
import inst1 from '../../img/inst1.jpg';
import inst2 from '../../img/inst2.jpg';
import inst3 from '../../img/inst3.jpg';
import inst4 from '../../img/inst4.jpg';
import inst5 from '../../img/inst5.jpg';
import { saveInstaFormAnswers } from '../../Redux/quizSlice';
import { useDispatch } from 'react-redux';

export default function Insta() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Форма была нажата:', e);
  };

  const handleSubmit = () => {
    if (name && number) {
      dispatch(saveInstaFormAnswers({ name, number }));
      setIsButtonDisabled(true);
    }
  };

  return (
    <section id="insta" className={styles.instaSection}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => handleClick(e)}>
          <h3 className={styles.formTitle}>Есть вопросы?</h3>
          <h2 className={styles.formSubtitle}>
            Заполните форму и наш менеджер свяжется с вами
          </h2>
          <input
            type="text"
            placeholder="Ваше имя"
            className={styles.inputField}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Номер телефона"
            className={styles.inputField}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            type="submit"
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={isButtonDisabled || !name || !number}
          >
            Отправить
          </button>
        </form>

        <div className={styles.instagramSection}>
          <h1 className={styles.instagramTitle}>Instagram</h1>
          <div className={styles.gridContainer}>
            <img src={inst1} alt="1" className={styles.gridItem} />
            <img src={inst2} alt="2" className={styles.gridItem} />
            <img src={inst3} alt="3" className={styles.gridItem} />
            <img src={inst4} alt="4" className={styles.gridItem} />
            <img src={inst5} alt="5" className={styles.gridItem} />
          </div>
        </div>
      </div>
    </section>
  );
}

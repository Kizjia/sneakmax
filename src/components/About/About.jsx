import React from 'react';
import about from '../../img/about.png';
import s from './About.module.scss'; // Импорт файла стилей

export default function About() {
  return (
    <section className={s.aboutSection} id="about">
      <div className={s.container}>
        <div className={s.contentWrapper}>
          <h2 className={s.heading}>Пара слов о нас</h2>
          <p className={s.description}>
            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
            спорт мы можем менять жизни. В том числе с помощью воодушевляющих
            историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
          </p>
          <div className={s.brandWrapper}>
            <div className={s.brandIcon}></div>
            <p className={s.brandName}>SneakMax</p>
          </div>
        </div>
        <div className={s.imageWrapper}>
          <img className={s.image} src={about} alt="About us" />
        </div>
      </div>
    </section>
  );
}

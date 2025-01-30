import React, { useState } from 'react';
import s from './Contacts.module.scss';
import { FaVk } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';

export default function Contacts() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <section id="contacts" className={s.contactsSection}>
      <div className={s.container}>
        <div className={s.infoBlock}>
          <h2 className={s.title}>Контакты</h2>

          <div className={s.officeBlock}>
            <p className={s.officeTitle}>ГЛАВНЫЙ ОФИС</p>

            <div className={s.tooltipContainer}>
              <div
                className={s.tooltipTarget}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                ?
                {isTooltipVisible && (
                  <div className={s.tooltip}>
                    {' '}
                    Адрес и телефон для корреспонденции, инвесторов. Вопросы о
                    доставке, качестве обслуживания и товара просьба задавать в
                    отдел продаж
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className={s.phone}>+7 800 789 89 89</p>
          <p className={s.address}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
          <p className={s.department}>ОТДЕЛ ПРОДАЖ</p>
          <p className={s.phone}>+7 800 789 89 89</p>
          <p className={s.address}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
          <div className={s.socialIcons}>
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialLink}
            >
              <FaVk size={44} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialLink}
            >
              <FaInstagramSquare size={44} />
            </a>
          </div>
        </div>

        <div className={s.mapWrapper}>
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
            className={s.mapLink}
          >
            Санкт‑Петербург
          </a>
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/house/2_ya_komsomolskaya_ulitsa_43/Z0kYdwNiSEAFQFtjfXRycXhqbQ==/?ll=30.142152%2C59.830499&utm_medium=mapframe&utm_source=maps&z=16"
            className={s.mapLink}
          >
            2-я Комсомольская улица, 43 на карте Санкт‑Петербурга — Яндекс Карты
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=30.142152%2C59.830499&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=30.142152%2C59.830499&whatshere%5Bzoom%5D=17&z=16"
            allowFullScreen={true}
            className={s.map}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

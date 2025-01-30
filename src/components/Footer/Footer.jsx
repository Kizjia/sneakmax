import React from 'react';
import s from './Footer.module.scss';

export default function Footer() {
  return (
    <section id="footer" className={s.footerSection}>
      <div className={s.container}>
        <footer className={s.footer}>
          <div className={s.logoWrapper}>
            <a href="#hero">
              <p className={s.logo}>SneakMax</p>
            </a>
          </div>
          <nav className={s.navbar}>
            <ul className={s.navList}>
              <li className={s.navItem}>
                <a href="#catalog" className={s.navLink}>
                  Каталог
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#about" className={s.navLink}>
                  О нас
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#quiz" className={s.navLink}>
                  Подбор товара
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#team" className={s.navLink}>
                  Наша команда
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#faq" className={s.navLink}>
                  Доставка и оплата
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#contacts" className={s.navLink}>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </section>
  );
}

import React from 'react';
import styles from './Team.module.scss';
import member1 from '../../img/member1.jpg';
import member2 from '../../img/member2.jpg';
import member3 from '../../img/member3.jpg';
import member4 from '../../img/member4.jpg';
import member5 from '../../img/member5.jpg';
import member6 from '../../img/member6.jpg';

export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Максим Золотарев',
      profession: 'Администратор',
      img: member1,
    },
    {
      id: 2,
      name: 'Максим Золотарев',
      profession: 'Администратор',
      img: member2,
    },
    {
      id: 3,
      name: 'Максим Золотарев',
      profession: 'Администратор',
      img: member3,
    },
    {
      id: 4,
      name: 'Максим Золотарев',
      profession: 'Администратор',
      img: member4,
    },
    {
      id: 5,
      name: 'Максим Золотарев',
      profession: 'Администратор',
      img: member5,
    },
    {
      id: 6,
      name: 'Максим Золотарев',
      profession: 'Администратор',
      img: member6,
    },
  ];

  return (
    <section id="team" className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Наша команда</h2>
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div className={styles.teamMember} key={index}>
              <img
                alt={`Фото команды: ${member.name}`}
                src={member.img}
                className={styles.memberPhoto}
              />
              <p className={styles.memberName}>{member.name}</p>
              <p className={styles.memberProfession}>{member.profession}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

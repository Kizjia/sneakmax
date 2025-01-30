import React, { useState } from 'react';
import { IoCloseOutline, IoAddOutline } from 'react-icons/io5';
import s from './Faq.module.scss';

export default function Faq() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const questions = [
    {
      name: 'Вопрос 1',
      answer:
        'А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми',
    },
    {
      name: 'Вопрос 2',
      answer:
        'А это ответ 2: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className={s.faqSection}>
      <div className={s.container}>
        <h2 className={s.title}>Часто задаваемые вопросы</h2>
        <div className={s.questionsWrapper}>
          {questions.map((question, index) => (
            <div key={index} className={s.questionBlock}>
              <div
                className={s.questionHeader}
                onClick={() => toggleQuestion(index)}
              >
                <h3 className={s.questionName}>{question.name}</h3>
                <div className={s.iconWrapper}>
                  {openQuestionIndex === index ? (
                    <IoCloseOutline size={25} />
                  ) : (
                    <IoAddOutline size={25} />
                  )}
                </div>
              </div>
              {openQuestionIndex === index && (
                <div className={s.answer}>{question.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

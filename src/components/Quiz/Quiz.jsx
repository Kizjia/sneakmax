import React, { useState } from 'react';
import styles from './Quiz.module.scss';
import firstSlide from '../../img/quizShoes.jpg';
import secondSlide from '../../img/quizBackground.png';
import fourthSlide from '../../img/quizIphone.png';
import fifthSlide from '../../img/quizScreen.png';
import { useDispatch } from 'react-redux';

import { saveAnswers } from '../../Redux/quizSlice';

export default function Quiz() {
  const [countSlide, setCountSlide] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const quizQuestions = [
    {
      title: 'Мы подберем идеальную пару для вас',
      text: 'Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями',
      question: 'Какой тип кроссовок рассматриваете?',
      answer: [
        'кеды',
        'сникеры',
        'ботинки',
        'мокасины',
        'мокасины',
        'мокасины',
      ],
      img: [
        firstSlide,
        firstSlide,
        firstSlide,
        firstSlide,
        firstSlide,
        firstSlide,
      ],
    },
    {
      title: 'Мы подберем идеальную пару для вас',
      text: 'Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями',
      question: 'Какой размер вам подойдет?',
      answer: ['менее 36', '36-38', '39-41', '42-44', '44-45'],
      img: [secondSlide],
    },
    {
      title: 'Мы подберем идеальную пару для вас',
      text: 'Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями',
      question: 'Уточните какие-либо моменты',
      answer: [],
    },
    {
      title: 'Ваша подборка готова!',
      text: 'Оставьте свои контактные данные, чтобы мы могли отправить подготовленный для вас каталог',
      img: [fourthSlide, fifthSlide],
    },
  ];

  const handleNext = () => {
    if (countSlide < quizQuestions.length - 1) {
      setCountSlide(countSlide + 1);
    }
  };

  const isNextDisabled =
    (countSlide === 0 && !quizAnswers[quizQuestions[0].question]) ||
    (countSlide === 1 && !quizAnswers[quizQuestions[1].question]) ||
    (countSlide === 2 && !quizAnswers[quizQuestions[2].question]);

  const handleAnswerSelect = (question, answer) => {
    setQuizAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  const handleSubmit = () => {
    if (name && email.includes('@')) {
      dispatch(saveAnswers({ ...quizAnswers, name, email }));
      setIsButtonDisabled(true);
    }
  };

  const currentQuestion = quizQuestions[countSlide];

  return (
    <section id="quiz" className={styles.quiz}>
      <div className={styles.container}>
        <div
          className={`${styles.slide} ${countSlide === 3 ? styles.slide4 : ''}`}
        >
          <h2 className={styles.title}>{currentQuestion.title}</h2>
          <p
            className={`${styles.text} ${countSlide === 3 ? styles.text4 : ''}`}
          >
            {currentQuestion.text}
          </p>
          {currentQuestion.question && (
            <p className={styles.question}>{currentQuestion.question}</p>
          )}

          {countSlide === 0 && (
            <div className={styles.answers}>
              {currentQuestion.answer.map((elem, ind) => (
                <div key={ind} className={styles.answer}>
                  <img
                    src={currentQuestion.img[ind]}
                    alt={`Option ${ind + 1}`}
                    className={styles.answerImage}
                  />
                  <label
                    htmlFor={`option-${ind}`}
                    className={styles.answerLabel}
                  >
                    <input
                      type="checkbox"
                      name="quiz-option"
                      id={`option-${ind}`}
                      className={styles.answerInput}
                      onChange={() =>
                        handleAnswerSelect(currentQuestion.question, elem)
                      }
                    />
                    {elem}
                  </label>
                </div>
              ))}
            </div>
          )}

          {countSlide === 1 && (
            <div className={styles.answers2}>
              <div className={styles.answerContent2}>
                {currentQuestion.answer.map((elem, ind) => (
                  <div key={ind} className={styles.answer2}>
                    <label
                      htmlFor={`option-${ind}`}
                      className={styles.answer2Label2}
                    >
                      <input
                        type="checkbox"
                        name="quiz-option"
                        id={`option-${ind}`}
                        className={styles.answerInput2}
                        onChange={() =>
                          handleAnswerSelect(currentQuestion.question, elem)
                        }
                      />
                      {elem}
                    </label>
                  </div>
                ))}
              </div>
              <img
                src={currentQuestion.img[0]}
                alt="Size Guide"
                className={styles.answer2Image2}
              />
            </div>
          )}

          {countSlide === 2 && (
            <div className={styles.answerTextArea}>
              <textarea
                placeholder="Введите сообщение"
                className={styles.textArea}
                onChange={(e) =>
                  handleAnswerSelect(currentQuestion.question, e.target.value)
                }
              />
            </div>
          )}

          {countSlide >= 3 && (
            <div className={styles.finalStep}>
              <div className={styles.formWrapper}>
                <h2 className={styles.finalTitle}>Получить предложение</h2>
                <p className={styles.finalText}>
                  Получите подборку подходящих для вас моделей на почту
                </p>
                <form className={styles.form}>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                  />
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className={styles.input}
                  />
                  <button
                    type="button"
                    disabled={isButtonDisabled || !name || !email.includes('@')}
                    className={styles.submitButton}
                    onClick={handleSubmit}
                  >
                    Получить
                  </button>
                </form>
              </div>
              <div className={styles.imageOverlay}>
                <img
                  src={currentQuestion.img[0]}
                  alt="Main"
                  className={styles.mainImage}
                />
                {isButtonDisabled && (
                  <img
                    src={currentQuestion.img[1]}
                    alt="Overlay"
                    className={styles.overlayImage}
                  />
                )}
              </div>
            </div>
          )}

          {countSlide < 3 && (
            <div className={styles.navigation}>
              <p className={styles.progress}>{`${countSlide + 1} из ${
                quizQuestions.length
              }`}</p>
              <button
                onClick={handleNext}
                className={styles.nextButton}
                disabled={isNextDisabled}
              >
                Следующий шаг
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

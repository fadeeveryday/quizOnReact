import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result( {count} ) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {count} ответа из {questions.length}</h2>
      <button>Попробовать снова</button>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const persentage = Math.round(step / questions.length * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => 
          <li 
            onClick={() => onClickVariant(index)}
            key={index}>
              {text}
          </li>)
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1)

    if(index === question.correct) setCount(count + 1)
  }
  


  return (
    <div className="App">
      {
        step !== questions.length ?
        <Game step={step} question={question} onClickVariant={onClickVariant} /> :
        <Result count={count} />

      }
    </div>
  );
}

export default App;

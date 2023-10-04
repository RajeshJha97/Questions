import { useState } from 'react';
import questions from './data';
function App() {
  const [question, setQuestion] = useState(questions[0]);
  const [showAnswer, setShowAnswer] = useState(true);
  return (
    <main className='container'>
      <section className='text-xl text-blue-950 mt-[10px] mb-[20px] text-center'>
        Questions
      </section>
      <section className='question'>
        <div className='title-container'>
          <h1 className='ml-2'>{question.title}</h1>
          <span>+</span>
        </div>
        <div className='info'>{showAnswer && <p>{question.info}</p>}</div>
      </section>
    </main>
  );
}

export default App;

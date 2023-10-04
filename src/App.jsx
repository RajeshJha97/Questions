import { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  const [questionId, setQuestionId] = useState(data.id);

  return (
    <main className='container'>
      <section className='text-2xl font-bold text-blue-950 mt-[10px] mb-[20px] text-center'>
        Questions
      </section>
      {questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </main>
  );
}

export default App;

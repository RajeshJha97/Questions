import { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
const Question = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleToggle = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <section className='question' key={question.id}>
      <div className='title-container'>
        <h1 className='ml-2 tex-blue-900 text-lg font-semibold'>
          {question.title}
        </h1>
        {showAnswer ? (
          <span onClick={handleToggle}>
            <AiOutlineMinusCircle className='text-xl bg-blue-900 rounded-full text-white cursor-pointer' />
          </span>
        ) : (
          <span onClick={handleToggle}>
            <AiOutlinePlusCircle className='text-xl bg-blue-900 rounded-full text-white cursor-pointer' />
          </span>
        )}
      </div>
      <div className='info'>{showAnswer && <p>{question.info}</p>}</div>
    </section>
  );
};

export default Question;

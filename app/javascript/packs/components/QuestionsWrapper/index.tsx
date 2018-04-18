import * as React from 'react';

import { QuestionType, ResponseType } from '../../constants/types';
import Question from '../Question';

interface Props {
  questions: QuestionType[];
  visibleQuestionSequence: number | null;
  setQuestionSequence(payload: number): {};
  setResponse(payload: ResponseType): {};
}

const QuestionsWrapper = (props: Props) => {
  const prevQuestion = () => {
    if (props.visibleQuestionSequence && props.visibleQuestionSequence !== 1) {
      props.setQuestionSequence(props.visibleQuestionSequence - 1);
    }
  };

  const nextQuestion = () => {
    if (props.visibleQuestionSequence && props.visibleQuestionSequence < props.questions.length) {
      props.setQuestionSequence(props.visibleQuestionSequence + 1);
    }
  };

  return (
    <div className="questions-wrapper">
      <p>{`Question ${props.visibleQuestionSequence} of ${props.questions.length}`}</p>
      {props.questions.map((question) =>
        <Question
          key={question.id}
          question={question}
          visibleQuestionSequence={props.visibleQuestionSequence}
          setResponse={props.setResponse}
        />
      )}
      <div className="navigation">
        <button className="btn btn-default" onClick={prevQuestion}>Back</button>
        <button className="btn btn-success" onClick={nextQuestion}>Next</button>
      </div>
    </div>
  );
}

export default QuestionsWrapper;

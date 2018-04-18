import * as React from 'react';
import { QuestionType, ResponseType } from '../../constants/types';

interface Props {
  question: QuestionType;
  setResponse(payload: ResponseType): {};
}

const RangeChoice = (props: Props) => {
  return (
    <div className="range-choice-question-wrapper">
      <h2>{props.question.title}</h2>
      <form>
        <div className="form-range">
          {props.question.options.map((option, index) => (
            <button
              className="btn btn-info"
              key={index}
              style={{ width: `${100 / props.question.options.length}%`}}
              onClick={(e) => {
                e.preventDefault();
                props.setResponse({
                  questionId: props.question.id,
                  selection: [option],
                  added: true
                });
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default RangeChoice;

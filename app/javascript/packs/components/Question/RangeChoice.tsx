import * as React from 'react';
import { QuestionType, ResponseType } from '../../constants/types';

interface Props {
  question: QuestionType;
  response?: ResponseType;
  setResponse(payload: ResponseType): {};
}

const RangeChoice = (props: Props) => {
  return (
    <div className="range-choice-question-wrapper">
      <form>
        <div className="form-range">
          {props.question.options.map((option, index) => (
            <button
              className={props.response
                && `${props.response.selection}` === `${option}`
                ? 'btnx orange' : 'btnx white'}
              key={index}
              style={{ width: `${100 / props.question.options.length}%`}}
              onClick={(e) => {
                e.preventDefault();
                props.setResponse({
                  questionId: props.question.id,
                  selection: [`${option}`],
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

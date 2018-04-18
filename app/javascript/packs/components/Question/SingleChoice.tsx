import * as React from 'react';
import { QuestionType, ResponseType } from '../../constants/types';

interface Props {
  question: QuestionType;
  setResponse(payload: ResponseType): {};
}

const SingleChoice = (props: Props) => (
  <div className="single-choice-question-wrapper">
    <h2>{props.question.title}</h2>
    <form>
      <div className="form-check">
        {props.question.options.map((option, index) => (
          <div key={index} className="form-option">
            <label  className="form-check-label" >
              <input
                type="radio"
                name={`question-${props.question.id}`}
                value={option}
                className="form-check-input"
                onChange={(e) =>
                  props.setResponse({
                    questionId: props.question.id,
                    selection: [e.target.value],
                    added: e.target.checked
                  })
                }
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </form>
  </div>
);

export default SingleChoice;

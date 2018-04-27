import * as React from 'react';
import { QuestionType, ResponseType } from '../../constants/types';

interface Props {
  question: QuestionType;
  response?: ResponseType;
  setResponse(payload: ResponseType): {};
}

const SingleChoice = (props: Props) => {
  const determineClass = (optn: string) => {
    if (props.response && props.response.selection.includes(optn)) {
      return 'form-option selected-text';
    }
    return 'form-option';
  };

  return (
    <div className="single-choice-question-wrapper">
      <form>
        <div className="form-check">
          {props.question.options.map((option, index) => (
            <div key={index} className={determineClass(option)}>
              <label className="form-check-label" >
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
};

export default SingleChoice;

import * as React from 'react';
import { QuestionType, ResponseType } from '../../constants/types';

interface Props {
  question: QuestionType;
  response?: ResponseType;
  setResponse(payload: ResponseType): {};
}

const MultipleChoice = (props: Props) => {
  const determineClass = (optn: string) => {
    if (props.response && props.response.selection.includes(optn)) {
      return 'form-option selected-text';
    }
    return 'form-option';
  };

  return (
    <div className="multiple-choice-question-wrapper">
      <form>
        <div className="form-check">
          {props.question.options.map((option, index) => (
            <div key={index} className={'form-option'}>
              <label className={determineClass(option)}>
                <input
                  type="checkbox"
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

export default MultipleChoice;

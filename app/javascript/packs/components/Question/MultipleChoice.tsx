import * as React from 'react';
import { QuestionType, ResponseType } from '../../constants/types';

interface Props {
  question: QuestionType;
  setResponse(payload: ResponseType): {};
}

const MultipleChoice = (props: Props) => (
  <div className="multiple-choice-question-wrapper">
    <form>
      <div className="form-check">
        {props.question.options.map((option, index) => (
          <div key={index} className="form-option">
            <label className="form-check-label">
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

export default MultipleChoice;

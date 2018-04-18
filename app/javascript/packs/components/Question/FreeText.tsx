import * as React from 'react';
import { QuestionType, ResponseType } from '../../constants/types';

interface Props {
  question: QuestionType;
  setResponse(payload: ResponseType): {};
}

const FreeText = (props: Props) => {
  return (
    <div className="text-choice-question-wrapper">
      <h2>{props.question.title}</h2>
      <form>
        <div className="form-range">
          <textarea
            style={{ width: '100%' }}
            onChange={(e) => {
              props.setResponse({
                questionId: props.question.id,
                selection: [e.target.value],
                added: true
              });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default FreeText;

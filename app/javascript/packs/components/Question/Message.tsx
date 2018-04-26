import * as React from 'react';
import { QuestionType } from '../../constants/types';

interface Props {
  question: QuestionType;
}

const Message = (props: Props) => {
  return (
    <div className="message-wrapper">
      <h3>{props.question.message}</h3>
    </div>
  );
};

export default Message;

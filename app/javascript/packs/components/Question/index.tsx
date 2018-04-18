import * as React from 'react';

import { QuestionType, ResponseType } from '../../constants/types';
import MultipleChoice from './MultipleChoice';
import SingleChoice from './SingleChoice';
import RangeChoice from './RangeChoice';
import FreeText from './FreeText';

interface Props {
  question: QuestionType;
  response?: ResponseType;
  visibleQuestionSequence: number;
  setResponse(payload: ResponseType): {};
}

const Question = (props: Props) => {
  const renderAppropriateQuestion = (question: QuestionType) => {
    if (question.type === 'MULTI') {
      return <MultipleChoice question={question} setResponse={props.setResponse} />;
    }
    if (question.type === 'RADIO') {
      return <SingleChoice question={question} setResponse={props.setResponse} />;
    }
    if (question.type === 'RANGE') {
      return <RangeChoice question={question} setResponse={props.setResponse} response={props.response} />;
    }
    if (question.type === 'TEXT') {
      return <FreeText question={question} setResponse={props.setResponse} />;
    }
    return <span />;
  };

  return (
    <div
      className={props.visibleQuestionSequence === props.question.sequence ?
        'question-wrapper' :
        'hidden'}
    >
      <h2>{`${props.question.title} ${props.question.responseRequired ? '*' : ''}`}</h2>
      {renderAppropriateQuestion(props.question)}
    </div>
  );
};

export default Question;

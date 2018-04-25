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
  validResponse: boolean;
  setResponse(payload: ResponseType): {};
  setNextQuestion(): {};
}

const Question = (props: Props) => {
  const renderAppropriateQuestion = (question: QuestionType) => {
    if (question.type === 'MULTI') {
      return (
        <MultipleChoice
          question={question}
          response={props.response}
          setResponse={props.setResponse}
        />
      );
    }
    if (question.type === 'RADIO') {
      return (
        <SingleChoice
          question={question}
          response={props.response}
          setResponse={props.setResponse}
        />
      );
    }
    if (question.type === 'RANGE') {
      return (
        <RangeChoice
          question={question}
          setResponse={props.setResponse}
          response={props.response}
        />
      );
    }
    if (question.type === 'TEXT') {
      return (
        <FreeText
          question={question}
          setResponse={props.setResponse}
        />
      );
    }
    return <span />;
  };

  return (
    <div
      className={props.visibleQuestionSequence === props.question.sequence ?
        'question-wrapper' :
        'hidden'}
    >
      <h2>{`${props.question.title}${props.question.responseRequired ? '*' : ''}`}</h2>
      {renderAppropriateQuestion(props.question)}
      <h5>{props.question.subtitle}</h5>
    </div>
  );
};

export default Question;

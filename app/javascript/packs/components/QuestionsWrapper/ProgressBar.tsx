import * as React from 'react';

interface Props {
  visibleQuestionSequence: number;
  questionsLength: number;
}

const ProgressBar = (props: Props) => {
  const calcWidth = () =>
    `${props.visibleQuestionSequence / props.questionsLength * 100}%`;

  return (
    <div className="question-tracker">
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: calcWidth()}} />
      </div>
    </div>
  );
};

export default ProgressBar;

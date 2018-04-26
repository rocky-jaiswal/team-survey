import * as React from 'react';

interface Props {
  // tslint:disable-next-line:no-any
  responses: any;
}

const ResponseList = (props: Props) => {
  return (
    <div className="response-list">
      <ul>
        { // tslint:disable-next-line:no-any
          props.responses.map((res: any, idx: number) =>
            <li key={idx}>{res}</li>
        )}
      </ul>
    </div>
  );
};

export default ResponseList;

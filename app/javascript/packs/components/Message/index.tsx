import * as React from 'react';

interface Props {
  type: string;
}

const Message = (props: Props) => {
  const getMessage = (type: string) => {
    if (type === 'completion') {
      return <p>Thank you!</p>;
    }
    return <span />;
  };

  return (
    <div id="site-message">
      {getMessage(props.type)}
    </div>
  );
}

export default Message;

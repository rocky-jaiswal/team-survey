import * as React from 'react';

// import { ActionType } from '../../constants/types';

interface Props {
}

const LoginForm: React.SFC<Props> = (props: Props) => {
  return (
    <form className="login-form">
      <div className="form-group">
        <label>Please enter your email address:
          <input type="email" className="form-control" id="userInputEmail1" placeholder="Your email" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default LoginForm;

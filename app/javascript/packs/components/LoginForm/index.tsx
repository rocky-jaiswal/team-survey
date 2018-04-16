import * as React from 'react';

interface Props {
  handleEmailChange(payload: string): {};
  handleSubmit(): {};
}

const LoginForm: React.SFC<Props> = (props: Props) => {
  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit();
      }}
    >
      <div className="form-group">
        <label>Please enter your email address:
          <input
            id="userInputEmail1"
            type="email"
            className="form-control"
            placeholder="Your email"
            onChange={(e) => props.handleEmailChange(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default LoginForm;

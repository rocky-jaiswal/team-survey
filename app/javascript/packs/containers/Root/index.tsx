import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import { generateToken, setUserEmail, GENERATE_TOKEN_FAILED } from '../../redux/app/actions';

import Layout from '../../components/Layout';
import LoginForm from '../../components/LoginForm';

interface Props {
  loading: boolean;
  tokenGenerated: boolean;
  error: string | null;
}

interface DispatchProps {
  changeRoute(route: string): {};
  setUserEmail(payload: string): {};
  generateToken(): {};
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    tokenGenerated: state.app.tokenGenerated,
    error: state.app.error
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    setUserEmail: (payload) => dispatch(setUserEmail(payload)),
    generateToken: () => dispatch(generateToken()),
    changeRoute: (payload: string) => dispatch(push(payload))
  };
};

export class Root extends React.Component<Props & DispatchProps> {

  showMessages () {
    return (
      <div>
      { this.props.tokenGenerated ?
        <p>Short term token generated. Please check your email.</p>
        :
        <span />
      }
      { this.props.error && this.props.error === GENERATE_TOKEN_FAILED ?
        <p>Short term token generation failed. Please contact admin.</p>
        :
        <span />
      }
      </div>
    );
  }

  render() {
    return (
      <Layout
        changeRoute={this.props.changeRoute}
      >
        <div>
          <h1><FormattedMessage id="app.welcome" /></h1>
          <LoginForm
            handleEmailChange={this.props.setUserEmail}
            handleSubmit={this.props.generateToken}
          />
          {this.showMessages()}
        </div>
      </Layout>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Root);

import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Dispatch, RootStateType } from '../../constants/types';

import Layout from '../../components/Layout';
import { fetchQuestions, fetchUserProfile } from '../../redux/app/actions';

interface Props {
  loading: boolean;
  loggedIn: boolean;
  userEmail: string | null;
}

interface DispatchProps {
  changeRoute(route: string): {};
  fetchQuestions(): {};
  fetchUserProfile(): {};
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    loggedIn: state.app.loggedIn,
    userEmail: state.app.userEmail
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeRoute: (payload: string) => dispatch(push(payload)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchUserProfile: () => dispatch(fetchUserProfile())
  };
};

export class Survey extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    if (!sessionStorage.getItem('jwt')) {
      this.props.changeRoute('/');
    } else {
      this.props.fetchQuestions();
      this.props.fetchUserProfile();
    }
  }

  render() {
    return (
      <Layout
        email={this.props.userEmail}
        loggedIn={this.props.loggedIn}
      >
        <div>
          <h1>Welcome to the weekly survey ...</h1>
        </div>
      </Layout>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);

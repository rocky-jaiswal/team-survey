import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Dispatch, RootStateType } from '../../constants/types';

import Layout from '../../components/Layout';
import { createSession } from '../../redux/app/actions';

interface Props {
  loading: boolean;
  token: string;
  loggedIn: boolean;
}

interface DispatchProps {
  changeRoute(route: string): {};
  createSession(token: string): {};
}

// tslint:disable-next-line:no-any
const mapStateToProps = (state: RootStateType, ownProps: any): Props => {
  return {
    loading: state.app.loading,
    loggedIn: state.app.loggedIn,
    token: ownProps.match.params.token
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeRoute: (payload: string) => dispatch(push(payload)),
    createSession: (payload: string) => dispatch(createSession(payload))
  };
};

export class Session extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    this.props.createSession(this.props.token);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.loggedIn) {
      this.props.changeRoute('/survey');
    }
  }

  render() {
    return (
      <Layout
        email={''}
        loggedIn={false}
      >
        <div>
          <h1>Starting session ...</h1>
        </div>
      </Layout>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Session);

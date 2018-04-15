import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Dispatch, RootStateType } from '../../constants/types';

import Layout from '../../components/Layout';

interface Props {
  loading: boolean;
  token: string;
}

interface DispatchProps {
  changeRoute(route: string): {};
}

// tslint:disable-next-line:no-any
const mapStateToProps = (state: RootStateType, ownProps: any): Props => {
  return {
    loading: state.app.loading,
    token: ownProps.match.params.token
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeRoute: (payload: string) => dispatch(push(payload))
  };
};

export class Session extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    // this.props.loadInitialData();
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

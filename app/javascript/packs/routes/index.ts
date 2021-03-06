import Root from '../containers/Root';
import Session from '../containers/Session';
import Survey from '../containers/Survey';
import Admin from '../containers/Admin';
import Users from '../containers/Users';
import AllSurveys from '../containers/AllSurveys';
import AllResponses from '../containers/AllResponses';

interface RouteDefinition {
  sequence: number;
  exact: boolean;
  path: string;
  component: React.ComponentClass<{}>;
}

interface Routes {
  [propName: string]: RouteDefinition;
}

const routes: Routes = {
  root: {
    sequence: 1,
    component: Root,
    exact: true,
    path: '/'
  },
  session: {
    sequence: 2,
    component: Session,
    exact: true,
    path: '/session/:token'
  },
  survey: {
    sequence: 3,
    component: Survey,
    exact: true,
    path: '/survey'
  },
  admin: {
    sequence: 4,
    component: Admin,
    exact: true,
    path: '/admin'
  },
  users: {
    sequence: 5,
    component: Users,
    exact: true,
    path: '/users'
  },
  allSurveys: {
    sequence: 6,
    component: AllSurveys,
    exact: true,
    path: '/allSurveys'
  },
  allResponses: {
    sequence: 7,
    component: AllResponses,
    exact: true,
    path: '/responses'
  }
};

export default routes;

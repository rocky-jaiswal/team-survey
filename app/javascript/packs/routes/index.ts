import Root from '../containers/Root';
import Session from '../containers/Session';
import Survey from '../containers/Survey';
import Admin from '../containers/Admin';

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
  }
};

export default routes;

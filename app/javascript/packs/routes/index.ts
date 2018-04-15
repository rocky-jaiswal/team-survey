import Root from '../containers/Root';
import Session from '../containers/Session';

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
  }
};

export default routes;

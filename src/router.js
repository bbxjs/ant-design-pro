import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getRouterData } from './common/router';
import Authorized from './utils/Authorized';
import { getQueryPath } from './utils/utils';

const { AuthorizedRoute } = Authorized;

function RouterConfig({ app }) {
  const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;
  const BasicLayout = routerData['/'].component;
  return (
      <Switch>
        <Route path="/user" component={UserLayout} />
        <AuthorizedRoute
          path="/"
          render={props => <BasicLayout {...props} />}
          authority={['admin', 'user']}
          redirectPath={getQueryPath('/user/login', {
            redirect: window.location.href,
          })}
        />
      </Switch>
  );
}

export default RouterConfig;

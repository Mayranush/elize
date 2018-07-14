import React from 'react';
import { Router, browserHistory } from 'react-router/es6';
import MainLayout from 'containers/layout';
import store from 'store';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

function requireAuth (nextState, replace, callback) {
  const token = store.getState().general.token || window.sessionStorage.getItem("token");
  if (!token) replace('/login');
  return callback()
}

function dontRequireAuth(nextState, replace, callback) {
  const token = store.getState().general.token || window.sessionStorage.getItem("token");
  if (token) replace('/');
  return callback()
}

const routes = {
  component: MainLayout,
  childRoutes: [
    {
      path: '/',
      onEnter: requireAuth,
      getComponent(location, cb) {
        System.import('pages/home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'non-compared',
      onEnter: requireAuth,
      getComponent(location, cb) {
        System.import('pages/second')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'login',
      onEnter: dontRequireAuth,
      getComponent(location, cb) {
        System.import('pages/login')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    }
  ]
};

export default () => <Router history={browserHistory} routes={routes} />;

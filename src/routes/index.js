import goHomePage from '../utils/goHomePage';

module.exports = {
  childRoutes: [{
    path: '/',
    component: require('../containers/Index').default,
    indexRoute: { onEnter: (nextState, replace) => goHomePage(replace) },
    childRoutes: [
      require('./main').default,
      require('./login'),
      require('./register'),
      require('./resetPassword'),
    ]
  }]
};

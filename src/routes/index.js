module.exports = {
  childRoutes: [{
    path: '/',
    component: require('../containers/Index').default,
    indexRoute: { onEnter: (nextState, replace) => replace('/users') },
    childRoutes: [
      require('./users'),
      require('./login'),
      require('./register')
    ]
  }]
};

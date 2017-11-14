export default {
  onEnter: (nextState, replace) => {
    if (!sessionStorage.getItem('profile')) {
      replace('/login');
    }
  },
  childRoutes: [
    require('./users'),
  ]
};

import * as profileTool from '../utils/profileTool';

export default {
  onEnter: (nextState, replace) => {
    if (!profileTool.getUsername()) {
      replace('/login');
    }
  },
  childRoutes: [
    require('./users'),
  ]
};

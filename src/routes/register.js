module.exports = {
  path: 'register',
  getComponent(nextState, cb) {
    cb(null, require('../containers/Register').default);
  }
};

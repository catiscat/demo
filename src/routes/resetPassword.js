module.exports = {
  path: 'reset-password',
  getComponent(nextState, cb) {
    cb(null, require('../containers/ResetPassword').default);
  }
};

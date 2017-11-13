import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  menuItems: PropTypes.array,
};

const contextTypes = {
  router: PropTypes.object,
};

const childContextTypes = {
  menuItems: PropTypes.array,
};

class App extends Component {

  getChildContext() {
    return {
      menuItems: this.props.menuItems,
    };
  }

  render() {
    const { children } = this.props;
    return (
      <div className="page">
        {children}
      </div>
    );
  }
}

App.propTypes = propTypes;
App.childContextTypes = childContextTypes;
App.contextTypes = contextTypes;

export default App;


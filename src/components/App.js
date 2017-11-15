import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class App extends Component {
  static propTypes = {
    menuItems: PropTypes.array,
    onLogout: PropTypes.func,
  }

  static contextTypes = {
    router: PropTypes.object,
  };

  static childContextTypes = {
    menuItems: PropTypes.array,
    events: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  getChildContext() {
    const { onLogout, menuItems } = this.props;
    return {
      menuItems,
      events: {
        onLogout
      },
    };
  }

  render() {
    const { children } = this.props;
    return (
      <div className="page">
        <div className="loader">
          {children || null}
        </div>

      </div>
    );
  }
}


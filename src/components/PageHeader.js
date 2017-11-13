import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Navbar, Nav } from 'rsuite';
import { Link } from 'react-router';

const propTypes = {
  brand: PropTypes.node,
  menuItems: PropTypes.array,
  activeItem: PropTypes.string
};

const contextTypes = {
  router: React.PropTypes.object.isRequired
};

class PageHeader extends Component {

  renderActiveItem(activeKey) {
    const { activeItem } = this.props;
    return activeItem === activeKey ? 'active' : null;
  }

  render() {
    return (
      <Header inverse >
        <div className="page-container">
          <Navbar.Header>
            <Navbar.Brand className="logo">
              <Link to="/">
                <span className="prefix">User</span>Demo
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <Nav.Item href="https://github.com/rsuite/rsuite-example-admin" >Github</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Header>
    );
  }
}

PageHeader.propTypes = propTypes;
PageHeader.contextTypes = contextTypes;

export default PageHeader;

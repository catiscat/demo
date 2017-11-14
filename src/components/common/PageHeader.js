import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Navbar, Nav, IconFont } from 'rsuite';
import { Link } from 'react-router';
import * as ResponseStatus from '../../constants/ResponseStatus';

const contextTypes = {
  router: React.PropTypes.object.isRequired,
  events: React.PropTypes.object.isRequired,
};

class PageHeader extends Component {

  static propTypes = {
    menuItems: PropTypes.array,
    activeItem: PropTypes.string
  }

  handleLogout() {
    const { onLogout } = this.context.events;
    onLogout({}, (response) => {
      if (response.code === ResponseStatus.SUCCESS) {
        sessionStorage.removeItem('profile');
      }
    });
  }

  render() {
    const profile = sessionStorage.getItem('profile');
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
            {
              profile ?
                <Nav pullRight>
                  <Nav.Item href="/#/login" >
                    <IconFont onClick={this.handleLogout} icon="power-off"></IconFont>
                  </Nav.Item>
                </Nav>
                :
                null
            }

          </Navbar.Collapse>
        </div>
      </Header>
    );
  }
}

PageHeader.contextTypes = contextTypes;

export default PageHeader;

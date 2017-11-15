import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Navbar, Nav, IconFont } from 'rsuite';
import { Link } from 'react-router';
import * as ResponseStatus from '../../constants/ResponseStatus';
import * as profileTool from '../../utils/profileTool';

const contextTypes = {
  router: React.PropTypes.object.isRequired,
  events: React.PropTypes.object.isRequired,
};

class PageHeader extends Component {

  static propTypes = {
    menuItems: PropTypes.array,
  }

  handleLogout = () => {
    const { onLogout } = this.context.events;
    sessionStorage.removeItem('profile');
    this.context.router.push('/login');
    onLogout();
  }

  editUser = () => {
    this.context.router.push('/reset-password');
  }

  render() {
    const username = profileTool.getUsername();
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
              username ?
                <Nav pullRight>
                  <Nav.Item >
                    <IconFont onClick={this.editUser} icon="edit2"></IconFont>
                  </Nav.Item>
                  <Nav.Item >
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

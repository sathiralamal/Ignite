import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

// eslint-disable-next-line
class Header extends Component {
    render() {
        return (
            <div>
                <h2>Ignite</h2>
              <Nav>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/privacypolicy">Privacy policy</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </div>
        );
    }
}

export default Header;
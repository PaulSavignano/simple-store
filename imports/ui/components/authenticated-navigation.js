import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Index</NavItem>
      </IndexLinkContainer>
      <IndexLinkContainer to="/products">
        <NavItem eventKey={ 2 } href="/products">Products</NavItem>
      </IndexLinkContainer>
      <IndexLinkContainer to="/cart">
        <NavItem eventKey={ 3 } href="/cart">Cart</NavItem>
      </IndexLinkContainer>
      <IndexLinkContainer to="/inventory">
        <NavItem eventKey={ 4 } href="/inventory">Inventory</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/documents">
        <NavItem eventKey={ 5 } href="/documents">Documents</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 6 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 6.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const PublicNavigation = () => (
  <div>
    <Nav>
      <LinkContainer to="/products">
        <NavItem eventKey={ 1 } href="/products">Products</NavItem>
      </LinkContainer>
      <LinkContainer to="/cart">
        <NavItem eventKey={ 2 } href="/cart">Cart</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="signup">
        <NavItem eventKey={ 3 } href="/signup">Sign Up</NavItem>
      </LinkContainer>
      <LinkContainer to="login">
        <NavItem eventKey={ 4 } href="/login">Log In</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);

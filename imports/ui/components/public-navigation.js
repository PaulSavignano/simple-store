import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const PublicNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/products">
        <NavItem eventKey={ 1 } href="/products">Products</NavItem>
      </IndexLinkContainer>
      <IndexLinkContainer to="/cart">
        <NavItem eventKey={ 2 } href="/cart">Cart</NavItem>
      </IndexLinkContainer>
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

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
    <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">  Study Buddy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/ViewStudents">View Students</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/ViewProfile">Profile</Nav.Link></Nav.Item>
          <Nav.Item><AmplifySignOut/></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Styles>


)
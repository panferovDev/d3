import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PostContext } from '../../Contexts/PostContexts';
import { usePostContext } from '../../Contexts/HOCs/PostContextProvider';

export default function AppNavBar(): JSX.Element {
  const posts = usePostContext()

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto flex-grow-1">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <span className="nav-link postCount">PostCount: {posts?.length}</span>
        </Nav>
      </Container>
    </Navbar>
  );
}

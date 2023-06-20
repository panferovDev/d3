import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import PostPage from './Components/Pages/PostPage';
import AppNavBar from './Components/UI/AppNavBar';

function App(): JSX.Element {
  return (
    <Container>
      <AppNavBar />
        <PostPage />
    </Container>
  );
}

export default App;

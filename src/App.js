import { Container } from '@mui/material';
import React from 'react';
import './assets/styles/App.css';
import LoginForm from './components/login';
import Sample from './components/sample';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignUpForm from './components/signup';

function App() {
  return (
    <div className="App">
      <Container>
        <Sample />
        <LoginForm />
        <SignUpForm />
      </Container>
    </div>
  );
}

export default App;

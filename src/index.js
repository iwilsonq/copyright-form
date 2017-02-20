import React from 'react';
import { render } from 'react-dom';
import Form from './components/Form';
import Header from './components/Header';
import '../style/styles.sass';

const App = () => {
  return (
    <div id="app">
      <Header />
      <Form />
    </div>
  );
};

render(
  <App />,
  document.getElementById('root')
);

import React from 'react';
import Header from './header/header';
import ShowSession from './session/showSession';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Header />
      <ShowSession />
      <TestPage></TestPage>
    </main>
  );
};

export default App;

const TestPage = () => {
  const style = {height: "200px"};
  return (
    <section>
      <h1 style={{color: "white"}}>Welcome to Memegur.</h1>
      <div>
        <h2>Nyooooom</h2>
        <img style={style} src="https://pbs.twimg.com/media/CP2Q8OCUcAAyoYF.jpg" />
      </div>
    </section>
  );
};

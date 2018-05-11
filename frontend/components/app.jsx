import React from 'react';
import Header from './header/header';
// import StickyHeader from './header/sticky_header';
import ShowSession from './session/showSession';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Post from './post/post_container';
// import Gallery from './gallery/gallery_container';


const App = () => {
  // <StickyHeader />
  
  // <Route exact path="/" component={Gallery} />
  // <Route exact path="/gallery" component={Gallery} />
  return (
    <div>
      <Header />
      <ShowSession />
      <Route path="/gallery/:id" component={Post} />
    </div>
  );
  // <TestPage></TestPage>
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

import React from 'react';
import LoginFormContainer from './session/loginFormContainer';
import SignupFormContainer from './session/signupFormContainer';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const TestPage = () => {
  const style = {height: "200px"};
  return (
    <div>
      <h1>Welcome to Memegur.</h1>
      <h2>Nyooooom</h2>
      <img style={style} src="https://pbs.twimg.com/media/CP2Q8OCUcAAyoYF.jpg" />
    </div>
  );
};


const App = () => {
  // let logout = <div></div>;
  // if (currenUser) {
  //   logout = (
  //     <div className="user-block">
  //       <h2>Hello, {currentUser.username}</h2>
  //       <button onClick={logout}>Log Out</button>
  //     </div>
  //   );
  // }

  const style = {height: "200px"};
  return (
    <div>
      <header>
        <div>
          <h1>Welcome to Memegur.</h1>
          <h2>Nyooooom</h2>
          <img style={style} src="https://pbs.twimg.com/media/CP2Q8OCUcAAyoYF.jpg" />
        </div>


      <div className="session-links">
              <Link to='/login'>Login! </Link>
              <Link to='/signup'>Sign Up! </Link>
      </div>





    </header>


      <AuthRoute path="/login" component={ LoginFormContainer } />
      <AuthRoute path="/signup" component={ SignupFormContainer } />
    </div>
  );
};

export default App;

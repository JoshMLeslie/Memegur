import React from 'react';
import Header from './header/header_container';
import ShowSession from './session/showSession';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';



const App = () => {
  return (
    <main>
      <Header />
      <ShowSession />

    </main>
  );
};

export default App;



// const TestPage = () => {
//   const style = {height: "200px"};
//   return (
//     <div>
//       <h1>Welcome to Memegur.</h1>
//       <div>
//         <h2>Nyooooom</h2>
//         <img style={style} src="https://pbs.twimg.com/media/CP2Q8OCUcAAyoYF.jpg" />
//       </div>
//     </div>
//   );
// };

// depreceated
// const App = () => {
//   return (
//     <div>
//       <header>
//         <div>
//           <TestPage />
//         </div>
//
//       <div className="session-links">
//               <Link to='/login'>Login! </Link>
//               <Link to='/signup'>Sign Up! </Link>
//       </div>
//
//     </header>
//
//
//       <AuthRoute path="/login" component={ LoginFormContainer } />
//       <AuthRoute path="/signup" component={ SignupFormContainer } />
//     </div>
//   );
// };
//
// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as PostActs from './actions/post_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: { users: { [window.currentUser.id]: window.currentUser } },
      session: { currentUser: { id: window.currentUser.id } }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

document.addEventListener('onunload', () => {
    alert("Make no further attempt to leave the testing area.");
});

// $(window).unload();

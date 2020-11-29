import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'; //load Bootstrap
import './index.css';

import App from './components/App'

const BLOG_POSTS = { //model for demoing
  '2020-11-26':"Why are we still stuck inside??",
  '2020-09-16':"School is starting and I'm still inside",
  '2020-05-19':"Still stuck inside. Please send help",
  '2020-04-04':"Been stuck inside all day!",
};

//render App, passing it array as prop!
ReactDOM.render(<App initialPosts={BLOG_POSTS} />, document.getElementById('root'));
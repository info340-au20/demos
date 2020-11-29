import { useState } from 'react';

import {NewPostPage, AboutPage, WelcomePage, ErrorPage} from './Pages'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import { BrowserRouter, Route, Switch, Link, NavLink, useParams } from 'react-router-dom';


function App(props) {
  //state
  const [posts, setPosts] = useState(props.initialPosts)
  const [isCurrentlyOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isCurrentlyOpen);
  }

  //function to add new posts to the set
  const addPost = (text, date) => {
    console.log("adding post");

    let postsCopy = {...posts} //make a copy
    postsCopy[date] = text //add the new element
    setPosts(postsCopy)
  }

  //map the posts into an array of li elements
  let postLinks = Object.keys(posts).map((date) => {
    return (
      <li key={date}>
        <NavLink to={'/blog/posts/'+date} className="nav-link" activeClassName={"activeLink"}>{date}</NavLink>
      </li>
    )
  });

  const renderBlogPostList = (routerProps) => {
    return <BlogPostList {...routerProps} posts={posts} />
  }

  return (
    <BrowserRouter>
      <div className="container">
        <h1>My Blog</h1>
        <nav className="bg-light border mb-3">
          <ul className="nav">
            <li>
              <NavLink exact to='/' className="nav-link" activeClassName={"activeLink"}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className="nav-link"  activeClassName={"activeLink"}>About</NavLink>
            </li>
            <li>
              <NavLink to='/blog' className="nav-link"  activeClassName={"activeLink"}>Blog</NavLink>
            </li>
            {postLinks}
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={WelcomePage} />

          <Route path="/about" component={AboutPage}/>
          <Route path="/post" component={NewPostPage} />
          {/* below errors */}
          <Route exact path="/blog" render={renderBlogPostList} />
          <Route path="/blog/posts/:postDate" component={BlogPost} />
          <Route path="/" component={ErrorPage} />
        </Switch>

        {/* <NewPostPage postCallback={addPost} />
        <AboutPage />
        <BlogPostList posts={posts} /> */}
      </div>
    </BrowserRouter>    
  );
}

//A list of all of the blog postings
function BlogPostList(props) {
  let postDates = Object.keys(props.posts).sort().reverse()
  let postItems = postDates.map((date) => {
    return <BlogPost key={date} date={date} post={props.posts[date]} />
  })

  return <div>{postItems}</div>
}

const BLOG_POSTS = { //model for demoing
  '2020-11-26':"Why are we still stuck inside??",
  '2020-09-16':"School is starting and I'm still inside",
  '2020-05-19':"Still stuck inside. Please send help",
  '2020-04-04':"Been stuck inside all day!",
};

//A single blog post
function BlogPost(props) {

  const urlParams = useParams()

  console.log(props)
  console.log(urlParams)

  let date = props.date;    
  let post = props.post;

  if(props.date == undefined) { //if I didn't get a prop
    date = urlParams.postDate
    post = BLOG_POSTS[date]
  }

  return (
    <div>
      <h2>Post on {date}</h2>
      <p>{post}</p>
    </div>
  );
}

export default App;
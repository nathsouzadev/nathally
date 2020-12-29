import React from "react";
import Post1 from './post1';
import Post2 from './post2';
import Post3 from './post3';
import Jumbotron from '../Home/Jumbotron';

const Blog = () => {
  return (
      <div className="row">
        <div className="col-lg-9">
          <Post3/>
          <Post2/>
          <Post1/>
        </div>
        <div className="col-lg-3">
          <Jumbotron/>
        </div>
      </div>
     
  );
};

export default Blog;

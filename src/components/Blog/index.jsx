import React from "react";
import Post1 from './post1';
import Jumbotron from '../Home/Jumbotron';

const Blog = () => {
  return (
      <div className="row">
        <div className="col-lg-9">
          <Post1/>
        </div>
        <div className="col-lg-3">
          <Jumbotron/>
        </div>
      </div>
     
  );
};

export default Blog;

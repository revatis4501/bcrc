import React from 'react'
import Blog from '../components/Blog'
import Breadcrumb from '../components/Breadcrumb';

const BlogPage = () => {
  return (
    <div>
      <Breadcrumb Title="Our Blog" page="blog" />

      <Blog />
    </div>
  );
}

export default BlogPage


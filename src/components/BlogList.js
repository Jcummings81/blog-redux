import React from 'react';
import { connect } from 'react-redux';
import Blog from '../Blog';

const filtered = (blogs, filter) => {
  switch (filter) {
    case 'Active':
      return blogs.filter( t => !t.liked )
    case 'Liked':
      return blogs.filter( t => t.liked )
    default:
      return blogs
  }
}

const BlogList = ({ blogs, activeFilter }) => (
  <ul>
    { filtered(blogs, activeFilter).map( (b) => {
        return ( <Blog key={b.id} {...b} /> )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, activeFilter: state.filter }
}

export default connect(mapStateToProps)(BlogList)
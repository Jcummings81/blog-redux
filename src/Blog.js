import React from 'react';
import { connect } from 'react-redux';
import { toggleBlog } from './actions/blogs'


const Blog = ({ id, name, liked, dispatch }) => (
  <li
    onClick={() => dispatch(toggleBlog(id))}
    style={ liked ? { textDecoration: 'line-through', color: 'grey' } : {} }
  >
    {name}
  </li>
)

export default connect()(Blog)
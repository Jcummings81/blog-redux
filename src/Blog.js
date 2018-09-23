import React from 'react';
import { connect } from 'react-redux';

const Blog = ({ id, name, liked, dispatch }) => (
  <li
    onClick={() => dispatch({ type: 'TOGGLE_BLOG', id })}
    style={ liked ? { textDecoration: 'line-through', color: 'grey' } : {} }
  >
    {name}
  </li>
)

export default connect()(Blog)
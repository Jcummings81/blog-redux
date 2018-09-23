import React from 'react';
import FilterLink from './FilterLink'

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Liked</FilterLink>
    {' '}
    <FilterLink>Unliked</FilterLink>
  </div>
)

export default Footer
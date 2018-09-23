import { TOGGLE_BLOG, ADD_BLOG } from '../actions/blogs'

const blogs = ( state = [], action ) => {
  switch(action.type) {
    case ADD_BLOG:
      return [action.blog, ...state]
    case TOGGLE_BLOG:
      return state.map( blog => {
        if (blog.id === action.id)
          return {...blog, liked: !blog.liked}
        return blog
      })
    default:
      return state
  }
}

export default blogs


import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";

const blogs = ( state = [], action ) => {
    switch(action.type) {
      case 'BLOGS':
        return action.blogs
      case 'ADD_BLOG':
        return [action.blog, ...state];
      case 'TOGGLE_BLOG':
        return state.map( blog => {
            if (blog.id === action.id)
                return {...blog, liked: !blog.liked}
            return blog
        })
      default:
        return state
    }
  }
  
  export default blogs;
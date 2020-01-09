import React, { createContext, useState, useReducer } from 'react'

const BlogContext = React.createContext();

const blogReducer=(state, action)=>{
    switch(action.type){
        case 'add_blogPost' :
            return  [...state, {title:`BlogPost #${state.length+1}`}]
        default:
            return state;    
    }
}

export const BlogPorvider=({children})=>{
    // const [blogPost, setBlogPost]=useState([])

    // const addBlogPost=()=>{
    //     setBlogPost([...blogPost, {title:`BlogPost #${blogPost.length + 1}`}]);
    // }

    const [blogPost, dispatch] = useReducer(blogReducer,[])

    const addBlogPost=()=>{
        dispatch({type: 'add_blogPost'})
    }

    return(
    <BlogContext.Provider value={{data: blogPost, addBlogPost}}>{children}</BlogContext.Provider>
    );
}

export default BlogContext;
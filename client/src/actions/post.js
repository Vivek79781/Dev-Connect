import axios from "axios";
import { setAlert } from "./alert";
import { GET_POSTS, POST_ERROR, UPDATE_LIKE, DELETE_POST, ADD_POST, CLEAR_POST, GET_POST, ADD_COMMENT, REMOVE_COMMENT } from "./types";

//Get Posts
export const getPosts = () => async dispatch => {
    try {
        dispatch({
            type: CLEAR_POST
        })
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts`)
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const getPost = postId => async dispatch => {
    try {
        dispatch({
            type: CLEAR_POST
        })
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${postId}`)
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add Post
export const addPost = FormData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/posts`, FormData, config )
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
        dispatch(setAlert('Post Created', 'success'))

    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add Like
export const addLike = postId => async dispatch => {
    try {
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/posts/like/${postId}`)

        dispatch({
            type: UPDATE_LIKE,
            payload: { postId, likes: res.data }
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Remove Like
export const removeLike = postId => async dispatch => {
    try {
        
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/posts/unlike/${postId}`)
        // console.log(res.data)
        dispatch({
            type: UPDATE_LIKE,
            payload: { postId, likes: res.data }
        })
    } catch (err) {
        // console.log(err.response)
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Delete Posts
export const deletePost = (postId) => async dispatch => {
    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/posts/${postId}`)
        dispatch({
            type: DELETE_POST,
            payload: { postId }
        })
        dispatch(setAlert('Post Removed', 'success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const addComment = (postId, FormData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/posts/comment/${postId}`, FormData, config )
        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
        dispatch(setAlert('Comment Added', 'success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


export const deleteComment = (postId, commentId) => async dispatch => {
    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/posts/comment/${postId}/${commentId}`)
        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId
        })
        dispatch(setAlert('Comment Removed', 'success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}
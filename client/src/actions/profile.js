import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, UPDATE_PROFILE, ACCOUNT_DELETED, CLEAR_PROFILE, GET_REPOS } from "./types";

// Get current user profile

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/profile/me`)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Get ALL profiles

export const getProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE })
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/profile`)
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//GET Profiles by ID

export const getProfileById = (userId) => async dispatch => {
    
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/profile/user/${userId}`)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const getGithubRepos = (username) => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/profile/github/${username}`)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//Create or Update Profile

export const createProfile = ( formData, navigate, edit = false ) => async dispatch => {
    try {
        const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/profile`,formData,config)

    dispatch({
        type: GET_PROFILE,
        payload: res.data
    })
    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'))
    console.log("res",res)
    if(!edit){
        navigate('/dashboard')
    }

    } catch (err) {

        const errors = err.response.data.errors
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//Add Experience
export const addExperience = (formData, navigate) => async dispatch => {
    try {
        const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/profile/experience`,formData,config)

    dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
    })
    dispatch(setAlert('Experience Added', 'success'))

    navigate('/dashboard')

    } catch (err) {

        const errors = err.response.data.errors
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//Add Education
export const addEducation = (formData, navigate) => async dispatch => {
    try {
        const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/profile/education`,formData,config)

    dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
    })
    dispatch(setAlert('Education Added', 'success'))

    navigate('/dashboard')

    } catch (err) {

        const errors = err.response.data.errors
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//Delete Experience
export const deleteExperience = id => async dispatch => {
    try {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/profile/experience/${id}`)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })
        dispatch(setAlert('Experience Removed', 'success'))
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//Delete Education
export const deleteEducation = id => async dispatch => {
    try {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/profile/education/${id}`)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })
        dispatch(setAlert('Education Removed', 'success'))
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//Delete Account
export const deleteAccount = () => async dispatch => {
    if(window.confirm('Are You Sure? This can NOT be undone!')){

        await axios.delete(`${process.env.REACT_APP_API_URL}/api/profile`)
        dispatch({ type: CLEAR_PROFILE })
        dispatch({ type: ACCOUNT_DELETED })

        dispatch(setAlert('Your Account has been permanently Deleted'))
    }
}
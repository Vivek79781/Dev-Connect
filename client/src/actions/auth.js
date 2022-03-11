import axios from 'axios'
import { setAlert } from './alert'
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types'

//Register User
export const register = ({ name, email, password}) => async dispatch => {
    // console.log({ name, email, password});
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name,email,password})
    console.log(body);
    try {
        const res = await axios.post('http://localhost:3030/api/users',body,config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}
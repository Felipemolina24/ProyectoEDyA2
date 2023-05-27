import {AUTH} from '../constants/actionTypes'
import * as api from '../api/index'

export const login = (formData, navigate) => async (dispatch) =>{
    try {
        const {data} = await api.login(formData);

        dispatch({type: AUTH, data })

        navigate('/home')
    } catch (error) {
        console.log(error);
    }
}

export const registro = (formData, navigate) => async (dispatch) =>{
    try {

        const {data} = await api.registro(formData);

        dispatch({type: AUTH, data })
        
        navigate('/home')
    } catch (error) {
        console.log(error);
    }
}
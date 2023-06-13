import axios from 'axios'
import { message } from 'antd'

export const registerUser = (values, response) => async dispatch =>{
    dispatch({type:'LOADING', payload: true});

    try{
        await axios.post('https://nujobs-backend.netlify.app/.netlify/functions/api/users/register', values)
        message.success("User Registered Successfully")
        setTimeout(() => {
            window.location.href = '/login'
        }, 1000)
        dispatch({type:'LOADING', payload: false});
    }catch(error) {
        if(error.response){
            const msg = error.response.data
            message.error(msg['message'])
        }else{
            message.error("Something went wrong, Please try later!")
        }
        
        dispatch({type:'LOADING', payload: false});
    }
}

export const loginUser = (values) => async dispatch =>{
    dispatch({type:'LOADING', payload: true});

    try{
        const user = await axios.post('https://nujobs-backend.netlify.app/.netlify/functions/api/users/login', values)
        message.success("User Logged-In Successfully")
        localStorage.setItem('user', JSON.stringify(user.data))
        setTimeout(() => {
            window.location.href = '/'
        }, 1000)
        dispatch({type:'LOADING', payload: false});
    }catch(error){
        if(error.response){
            const msg = error.response.data
            message.error(msg['message'])
        }else{
            message.error("Something went wrong, Please try later!")
        }
        dispatch({type:'LOADING', payload: false});
    }
}

export const updateUser = (values) => async dispatch =>{

    const userid = JSON.parse(localStorage.getItem('user'))._id

    values._id = userid
    dispatch({type:'LOADING', payload: true});

    try{
        const user = await axios.post('https://nujobs-backend.netlify.app/.netlify/functions/api/users/update', values)
        message.success("User Updated Successfully")
        localStorage.setItem('user', JSON.stringify(user.data))
        setTimeout(() => {
            window.location.href = '/profile'
        }, 1000)
        dispatch({type:'LOADING', payload: false});
    }catch(error){
        if(error.response){
            const msg = error.response.data
            message.error(msg['message'])
        }else{
            message.error("Something went wrong, Please try later!")
        }
        dispatch({type:'LOADING', payload: false});
    }
}

export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const response = await axios.get("https://nujobs-backend.netlify.app/.netlify/functions/api/users/getallusers");
      dispatch({ type: "GET_ALL_USERS", payload: response.data });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING", payload: false });
    }
}

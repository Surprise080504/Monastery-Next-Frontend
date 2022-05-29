import axios from 'axios';
import setAuthToken from "utils/setAuthToken";
import jwt_decode from 'jwt-decode';
import { SERVER_URL } from './types';
import { notify } from 'component/Notify';
import { GET_ERRORS, SET_CURRENT_USER } from './types';


// Register User
export const registerUser = (userData,router) => {
  axios.post(`${SERVER_URL}/register`, userData)
    .then(res => {
      if(res){
        notify('success','register successful');
        router.push('/login');
      }
    })
    .catch(err =>{
      if(err){
        notify('warn',err.response.data.email)
      }
    });
};


// Login - Get User Token
export const loginUser = (userData,router) => {
  axios.post(`${SERVER_URL}/login`, userData)
    .then(res => {
      if(res){
        notify('success',res.data.message);
        router.push('/dashboard');
      }
      // Save to localStorage
      // const { token } = res.data;
      // localStorage.setItem('jwtToken', token);
      // // Set token to auth header
      // setAuthToken(token);
      // // Decode token to get user data
      // const decoded = jwt_decode(token);
      // // Set current user
      // dispatch(setCurrentUser(decoded));
    })
    .catch(err =>{
      if(err.response)
        notify('warn',err.response.data.email);
    }
    );
};


// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};


// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set the current user to {} which is will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

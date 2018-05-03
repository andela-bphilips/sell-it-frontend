import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER, } from './types';

const apiBaseUrl = 'https://sell-it-api.herokuapp.com/api/v1';

/**
 *
 *
 * @export
 * @param {any} user
 * @returns
 */
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

/**
 *
 * User Login Request
 * It login the user and set token then dispatch current user
 * @export
 * @param {object} userData user Details
 * @returns
 */
export function userLoginRequest(userData) {
  return dispatch => axios
    .post(`${apiBaseUrl}/login`, userData)
    .then((res) => {
      res = res.data;
      const token = `Bearer ${res.data.token}`;
      const userDetails = res.data.user;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(userDetails));
      window.location = '/';
    });
}

/**
 *
 *
 * @export
 * @returns
 */
export function getCurrentUser() {
  return dispatch => axios.get(`${apiBaseUrl}/user`)
    .then((res) => {
      const userDetails = res.data.data.user;
      dispatch(setCurrentUser(userDetails));
    });
}

/**
 *
 * Logout
 * It logs the user out
 * @export
 */
export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

/**
 * user updates password. It sends a new password request
 * @param {object} details - new password object
 * @returns {object} - updated user profile
 */
export function updateUser(details) {
  return dispatch => axios.put(`${apiBaseUrl}/user`, details)
    .then((res) => {
      const userDetails = res.data.data.user;
      dispatch(setCurrentUser(userDetails));
    });
}

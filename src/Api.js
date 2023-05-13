import axios from "axios";



const REACT_APP_API_URL = process.env.REACT_APP_API_URL


//sign up a user

export const signup = (user) => {
    return axios.post(`${REACT_APP_API_URL}/signup`, user);
}

//sign in a user

export const login = (user) => {
    console.log(REACT_APP_API_URL)
    return axios.post(`${REACT_APP_API_URL}/login`, user);
}


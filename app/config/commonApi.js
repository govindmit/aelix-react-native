import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikpob24yNUBnbWFpbC5jb20iLCJfaWQiOiI2MzE1ZGY5OTU5ZDNiZWNmYTdiMWIzYjYiLCJpYXQiOjE2NzIwMzIzMDIsImV4cCI6MTY3MjExODcwMn0.I3WeCiWY2FTFLeWPHNyYB0hZUjef5ujzbRGFXQpL2Ms"
const apiUrl = 'https://api-aelix.mangoitsol.com/api'

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  }
});

authAxios.post('/login')

export const api = `${apiUrl}/login`; 
// export const AllUser = `${apiUrl}/getAllUsers`; 
// export const Register = `${apiUrl}/register`;  

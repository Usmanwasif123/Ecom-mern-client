import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjM3ODU2OGYxZmE3M2YxMTZlZWU5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODE3MjYzNSwiZXhwIjoxNjk4NDMxODM1fQ.pjWxpGzoA2KcsuPu9hJxNs048_WAjxtCDDMXMeDl5es";

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {toke: `Bearer ${TOKEN}`},
});
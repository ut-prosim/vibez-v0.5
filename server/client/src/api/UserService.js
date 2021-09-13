//  SERVER/CLIENT/SRC/API/UserService.js  //

import BackEndCall from './BackEndCall';
import * as tokenService from "../utils/tokenService";

const create = (data, res) => {
    let url = "http://localhost:5000/auth/auth/spotify";
    window.location = url;
    return BackEndCall.post('/register', data);
}
const login = (data) => {
    let token = tokenService.getToken();
    return BackEndCall.post('/login', data, token);
};

const getUser = () => {
    let user = tokenService.getUserFromToken();
    console.log("DECODED USER FROM GET USER FUNCTION IN USER SERVICE: ", user);
    return user;
}

export { create, login, getUser };

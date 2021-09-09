import backEndCall from './backEndCall';
import * as tokenService from "../utils/tokenService";

const create = (data) => {
    return backEndCall('/', data);
};

const login = (data) => {
    return backEndCall('/login', data);
};

const getUser = () => {
    let user = tokenService.getUserFromToken();
    console.log("DECODED USER FROM GET USER FUNCTION IN USER SERVICE: ", user);
    return user;
}

export { create, login, getUser };

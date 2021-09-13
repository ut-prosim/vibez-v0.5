//  SERVER/CLIENT/SRC/UTILS/tokenService.js  //

import BackEndCall from "../api/BackEndCall";

function setToken(token) {
    console.log("SETTING TOKEN: ", token);
    if (token) {
        localStorage.setItem("token", token);
        // allllllsooooo...add to the auth header
        BackEndCall.defaults.headers.common["Authorization"] =
            "Bearer " + token;
    } else {
        localStorage.removeItem("token");
        BackEndCall.defaults.headers.common["Authorization"] = null;
    }
}

function getToken() {
    let token = localStorage.getItem("token");
   BackEndCall.defaults.headers.common["Authorization"] = "Bearer " + token;
    console.log(
        "GETTING TOKEN FROM LOCAL STORAGE AND SETTING HEADERS: ",
        token
    );
    if (token) {
        // Check if expired, remove if it is
        const payload = JSON.parse(atob(token.split(".")[1]));
        console.log("DECODED PAYLOAD: ", payload);
        // JWT's exp is expressed in seconds, not milliseconds, so convert
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem("token");
            BackEndCall.defaults.headers.common["Authorization"] = null;
            token = null;
        }
    }
    return token;
}

function getUserFromToken() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}
export { setToken, getToken, getUserFromToken };
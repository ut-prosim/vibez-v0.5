import BackEndCall from '../api/BackEndCall';

const OAuth = require("@zalando/oauth2-client-js");

const spotify = new OAuth.Provider({
  id: "spotify",
  authorization_url: "http://accounts.spotify.com/authorize",
});

// Create a new request
const request = new OAuth.Request({
  client_id: "cb4e46622559403d9acdba7144bf4831", // required
  redirect_uri: "http://localhost:3000/auth/login", // required
  response_type: 'token'
});

// Give it to the provider
const uri = spotify.requestToken(request);
window.location.href = uri;

const response = () => {
  spotify.parse(window.location.hash);
};

BackEndCall.get(uri).then(function (response) {
  spotify.handleRefresh(response.body);
  // your tokens are now diamonds
  // ehm, up to date.
});

const getAccessToken = () => {
   spotify.getAccessToken()
    spotify.remember(request);
    response()
}

const getRefreshToken = () => {
    spotify.getRefreshToken()
    spotify.remember(request);
    response()
}
// Later we need to check if the response was expected
// so save the request

// Do the redirect


export {response, getAccessToken, getRefreshToken};


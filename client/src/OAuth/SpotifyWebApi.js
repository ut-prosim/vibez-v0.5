import {getAccessToken} from './provider'
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: "cb4e46622559403d9acdba7144bf4831",
  clientSecret: "cd315e345f264902bd1406a642bb2830",
  redirectUri: "http://localhost:3000/auth",
  response_type: 'token'
});

spotifyApi.getMe()
  .then(function(data) {
    spotifyApi.setAccessToken(getAccessToken());
    console.log('Some information about the authenticated user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  }).catch(err => {
    console.log(err.message)
  })
  ;

export default spotifyApi;
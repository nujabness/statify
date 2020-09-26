export const SPOTIFY_AUTH_CONFIG = {
    clientId: 'b91852cc25b04e79b697ce2c96ff981f',
    clientSecret: 'c9767466f3dd4bc98465be432773aba7',
    redirectUrl: 'https://auth.expo.io/@anonymous/statify-24f4a317-dbb8-418a-91c1-b697bf89c078',

    serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },
};
export const CLIENT_ID_SPOTIFY = 'b91852cc25b04e79b697ce2c96ff981f';
export const SCOPE_SPOTIFY = 'playlist-read-private ' +
    'playlist-modify-public ' +
    'playlist-modify-private ' +
    'user-library-read ' +
    'user-library-modify ' +
    'user-top-read ' +
    'user-read-recently-played ' +
    'user-read-email ';

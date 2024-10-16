
// Function to generate a random string for the code verifier
function generateRandomString(length) {
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    return text;
}

// Function to base64url encode a string
function base64UrlEncode(str) {
    return btoa(str)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

// Function to create a SHA256 hash of the code verifier
async function sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return base64UrlEncode(String.fromCharCode(...new Uint8Array(hash)));
}

// Function to initiate the OAuth flow
 export const authenticateWithSpotify = async() => {
    const clientId = '726bd73522f543ce942ada0f6ebcfb60' // Replace with your Spotify client ID
    const redirectUri = 'http://localhost:3000/'; // Replace with your redirect URI
    const scope = 'playlist-modify-public';

    const codeVerifier = generateRandomString(128);
    const codeChallenge = await sha256(codeVerifier);

    // Store codeVerifier for later use
    localStorage.setItem('codeVerifier', codeVerifier);

    // Construct the authorization URL
    const authUrl = `https://accounts.spotify.com/authorize?` +
    `response_type=code&` +
    `client_id=${encodeURIComponent(clientId)}&` +
    `redirect_uri=${encodeURIComponent(redirectUri)}&` +
    `scope=${encodeURIComponent(scope)}&` +
    `code_challenge=${codeChallenge}&` +
    `code_challenge_method=S256`;

  //localStorage.setItem('code_verifier', codeVerifier); //store code-verifier for laer use   

    window.location.href = authUrl; // Redirect to Spotify
}

// Function to exchange authorization code for access token
export const getAccessToken = async(code) => {
    const clientId = '726bd73522f543ce942ada0f6ebcfb60'; // Replace with your Spotify client ID
    const redirectUri = 'http://localhost:3000/'; // Replace with your redirect URI
    const codeVerifier = localStorage.getItem('codeVerifier');

    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirectUri);
    params.append('client_id', clientId);
    params.append('code_verifier', codeVerifier);

    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        console.error('Error fetching access token:', errorResponse);
        return;
    }

    const data = await response.json();
    const accessToken = data.access_token; //extracts access token
    localStorage.setItem('accessToken', accessToken); // Storing accessToken for later use
    return accessToken;
}

// Function to handle the redirect and get the access token
const extractAccessToken = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
        // Call the function to get the access token
        const accessToken = await getAccessToken(code);
        localStorage.setItem('accessToken', accessToken)
    } else {
        console.error('Authorization code not found.');
    }
}
extractAccessToken();

export const search = (term) => {
    const accessToken = localStorage.getItem('accessToken');
    return fetch((`https://api.spotify.com/v1/search?type=track&q=${term}`), {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      if(!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
        audio: track.preview_url
      }));
    });
  }

  export const saveUserPlaylist = (name, trackUris) => {
    if(!trackUris.length || !name) {
        return;
    }

    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}` 
    }
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers})
      .then(response => response.json())
      .then(jsonResponse => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({name: name})
        })
        .then(response => response.json())
        .then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({uris: trackUris})
            });
        });
      });
  };

import React from 'react';
import SpotifyContext from '../contexts/SpotifyContext';

const scopes = process.env.REACT_APP_SPOTIFY_SCOPES
const myClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

const SpotifyAuthButton = () => {
    const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=` + myClientId + (scopes ? '&scope=' + encodeURIComponent(scopes): "") + '&show_dialog=' + encodeURIComponent(true) + '&redirect_uri=' + encodeURIComponent('http://localhost:3000');

    const handleClick = () => {
        window.location = url;
    }
    return (
        <SpotifyContext.Consumer>
            {
                value => {
                    return (
                        <button id='spotify-log-in' onClick={handleClick} className={value ? 'no-events' : 'button'}>
                            <img id='spotify-logo' src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-Logo.png' alt='Spotify logo'/>
                            {value ? <span id='spotify-text'>Logged In</span> : <span id='spotify-text'>Log In to Spotify</span>}
                        </button>
                    )
                }
            }
        </SpotifyContext.Consumer>
    )
}

export default SpotifyAuthButton;
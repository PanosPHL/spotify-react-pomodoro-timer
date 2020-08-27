import React from 'react';
import TimerAndButtons from './components/TimerAndButtons';
import TopButtons from './components/TopButtons';
import BottomButtons from './components/BottomButtons';
import AudioUpload from './components/AudioUpload';
import SpotifyAuthButton from './components/SpotifyAuthButton';
import Errors from './components/Errors';

function App() {
  return (
    <>
    <div id='top-container'>
    <AudioUpload />
    <Errors />
    <SpotifyAuthButton />
    </div>
    <div id='center-screen'>
      <TopButtons />
      <TimerAndButtons />
      <BottomButtons />
    </div>
    </>
  );
}

export default App;

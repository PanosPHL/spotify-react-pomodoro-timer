import React from 'react';
import TimerAndButtons from './components/TimerAndButtons';
import TopButtons from './components/TopButtons';
import BottomButtons from './components/BottomButtons';
import AudioUpload from './components/AudioUpload';

function App() {
  return (
    <>
    <AudioUpload />
    <div id='center-screen'>
      <TopButtons />
      <TimerAndButtons />
      <BottomButtons />
    </div>
    </>
  );
}

export default App;

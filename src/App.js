import React from 'react';
import TimerAndButtons from './components/TimerAndButtons';
import TopButtons from './components/TopButtons';
import BottomButtons from './components/BottomButtons';

function App() {
  return (
    <div id='center-screen'>
      <TopButtons />
      <TimerAndButtons />
      <BottomButtons />
    </div>
  );
}

export default App;

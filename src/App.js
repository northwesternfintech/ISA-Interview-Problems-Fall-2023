import logo from './logo.svg';
import './App.css';

import Background from './background';
import Foreground from './foreground';

function App() {
  return (
    <div className="App">
      <div className='page-wrapper'>
        <div className='page-content'>
          <Background />
        </div>
        <div className='page-content'>
          <Foreground />
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';

import Background from './Background';
import Foreground from './Foreground';

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

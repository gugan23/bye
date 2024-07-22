/*
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import CenteredProgressBar from './progress'; // Adjust the path if necessary
import CircularWithValueLabel from './Circle';

function App() {
  return (
    <div>
      <CenteredProgressBar />
      <CircularWithValueLabel />
    </div>
  );
}

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
*/
// src/App.js
import React from 'react';
import AsteroidsBackground from './components/aestroid';
import CenteredProgressBar from './progress'; // Adjust the path if necessary


const App = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <AsteroidsBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ color: 'black', textAlign: 'center', marginTop: '50vh' }}>Welcome to the Asteroids Background</h1>
      </div>
    </div>
  );
};

export default App;

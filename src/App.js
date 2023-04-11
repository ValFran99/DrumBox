import './App.css';
import ControlPanel from './ControlPanel';
import "./Display.js";
import Button from "./Button"

function App() {
  return (
    <div className="App" id='drum-machine'>
      <Button 
      filePath="./KICK_1.mp3" 
      keyToCheck="q" />
      <ControlPanel />
    </div>
  );
}

export default App;
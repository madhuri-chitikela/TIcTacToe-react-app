import './App.css';
import {Board} from './components/Board';

function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Tic-Tac-Toe Game React App</h1>
      <Board />
      <div style={{textAlign: "center", marginTop: '20px'}}>
      <a href="https://github.com/madhuri-chitikela/TIcTacToe-react-app">View Code Here</a>
      </div>
    </div>
  );
}

export default App;

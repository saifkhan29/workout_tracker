import './App.css';
import CreateWorkout from './components/CreateWorkout';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Workout Tracker</h1>
      <Home/>
      <CreateWorkout/>

 
    </div>
  );
}

export default App;

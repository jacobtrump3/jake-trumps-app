import './App.css';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Router } from './Router';
function App() {
  return (
    <Router>
      <NavigationBar/>
    </Router>
  );
}

export default App;

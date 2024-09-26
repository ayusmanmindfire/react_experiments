import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';


function App() {
  return (
    <div>
      <Navbar/>
      <Home name="spiderman"/>
    </div>
  );
}

export default App;

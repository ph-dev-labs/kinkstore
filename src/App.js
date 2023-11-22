import './App.css';
import Annoucement from './components/Announcement/Annoucement';
import SearchHolder from './components/SearchHolder/SearchHolder';
import DropNav from './components/DropDownNav/DropNav';
import Navbar from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;

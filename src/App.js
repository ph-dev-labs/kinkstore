import './App.css';
import Annoucement from './components/Announcement/Annoucement';
import SearchHolder from './components/SearchHolder/SearchHolder';
import DropNav from './components/DropDownNav/DropNav';
function App() {
  return (
    <div className="App">
      <Annoucement />
      <SearchHolder />
      <DropNav />
    </div>
  );
}

export default App;

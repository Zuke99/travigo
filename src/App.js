
import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <div className="App">
      <Navbar/>
      <Landing/>
    </div>
  </LocalizationProvider>
   
  );
}

export default App;

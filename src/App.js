import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import DetailsCard from './components/DetailsCard';
import SmallCard from './components/SmallCard';
import MainComp from './components/MainComp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <MainComp/> */}
        <Routes>
        
          <Route path='/' element={<MainComp />} exact/>
          <Route path='/:id' element={<DetailsCard />} />
         
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

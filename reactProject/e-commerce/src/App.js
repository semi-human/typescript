
import './App.css';
import { Header } from './common/header/header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          {/* <Route path='/' elemen={<Home/>}/> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

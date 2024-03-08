import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePageComponent from './Components/Pages/HomePageComponent';
import JacoozziPageComponent from './Components/Pages/JacoozziPageComponent';
import NavBarComponent from './Components/NavBarComponent';

function App() {
  return (
    <BrowserRouter>
      {/* wrapping our app in browser router enables routing */}
      <NavBarComponent />
      <Routes>
        {/* route defines our routes to different pages */}
        {/* "/" defines the home page or default rendering */}
        <Route path='/' element={<HomePageComponent />} />

        <Route path='/jacoozi' element={<JacoozziPageComponent />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

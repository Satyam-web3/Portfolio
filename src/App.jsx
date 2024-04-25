
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/home';
import Weather from "./weather/weather";
import Table from "./newtable/Table";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
        <Route path="/timetable" element={<Table/> }/>
      </Routes>
    </>
  )
}

export default App

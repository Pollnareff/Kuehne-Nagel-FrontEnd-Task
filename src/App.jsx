import Table from "./components/Table"
import Sidebar from "./components/Sidebar"
import About from "./components/About"
import {Routes, Route} from 'react-router-dom'

function App() {
    return (
      <div className="flex">
        <Routes>
          <Route path="/table" element={<Table />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        <Sidebar />
      </div>
    )
}

export default App;
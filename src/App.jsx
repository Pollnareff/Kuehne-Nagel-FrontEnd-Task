import Table from "./components/Table"
import Sidebar from "./components/Sidebar"
import About from "./components/About"
import NotFound from "./components/NotFound"
import More from "./components/More"

import {Routes, Route} from 'react-router-dom'

function App() {
    return (
      <div className="flex">
        <Routes>
          <Route path="/" element={<Table />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/shipment" element={<More />}/>
        </Routes>
        <Sidebar />
      </div>
    )
}

export default App;
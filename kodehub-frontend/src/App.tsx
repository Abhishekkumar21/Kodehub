import { Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Auth from "./pages/Auth"

function App() {
   return (
    <>      
     <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/auth" element={<Auth/>}/>
     </Routes>
    </>
  )
}

export default App

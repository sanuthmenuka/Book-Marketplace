import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Publish from './pages/Publish'
import Navtop from './components/Navbar'
import Downloadbooks from './pages/Downloadbooks'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  const { user } = useAuthContext()
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navtop />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />

            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />

            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />

            <Route
              path="/publish" element={user ?<Publish/>:<Navigate  to="/Publish.js"/> }>
            </Route>

            <Route
            path="/downloadbooks" element={user ?<Downloadbooks/>:<Navigate  to="/Downloadbooks.js"/> }>

            </Route>


            <Route
            path="/about" element={user ?<About/>:<Navigate  to="/About.js"/> }>

            </Route>
           
            
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
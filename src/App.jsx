import './App.css'
import Home from './views/home'
import Aboutus from './views/aboutus'
import Sermons from './views/sermons'
import Events from './views/events'
import Onlinegiving from './views/onlinegiving'
import Visitus from './views/visitus'
import Blog from './views/blog'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/appbar'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="aboutus" element={ <Aboutus/> } />
        <Route path="sermons" element={ <Sermons/> } />
        <Route path="/events" element={ <Events/> } />
        <Route path="/onlinegiving" element={ <Onlinegiving/> } />
        <Route path="/visitus" element={ <Visitus/> } />
        <Route path="/blog" element={ <Blog/> } />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {Work} from './components/Work'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (
    <>

      <Routes baseName={process.env.PUBLIC_URL}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Route>
      </Routes>

    </>
  )
}

export default App

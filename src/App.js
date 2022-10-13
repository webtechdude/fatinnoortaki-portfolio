import React from 'react'
import Contentcontainer from './components/Contentcontainer';
import Navbar from './components/Navbar';
import './index.css'
import Scrollspy from "react-scrollspy"



const App = () => {
  return (
    <main id="main">
        <Navbar />
      <Contentcontainer />
    </main>
  )
}

export default App;
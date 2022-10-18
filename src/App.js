import React, { useEffect, useState } from 'react'
import Contentcontainer from './components/Contentcontainer';
import Navbar from './components/Navbar';
import './index.css'
import { BsFillMoonStarsFill, BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';


const ThemeToggleButton = ({ children, onClick, toggleTo }) => {
  return <button data-convert={toggleTo} className="themeToggler" onClick={onClick}>{children}</button>
}

const App = () => {
  const [content, setContent] = useState()
  const [isLight, setIsLight] = useState(false)
  const [toggleTo, setToggleTo] = useState()

  const themeToggler = () => {
    setIsLight(value => !value)
    document.body.classList.toggle('light')
  }
  useEffect(() => {
    if (isLight) {
      setContent(<BsFillSunFill />)
      setToggleTo("Toggle To Dark Mode")
    } else {
      setContent(<BsMoonStarsFill />);
      setToggleTo("Toggle To Light Mode")
    }
  }, [isLight])
  useEffect(() => {
    setIsLight(false)
    setContent(<BsFillMoonStarsFill />)
  }, [])


  return (
    <>
      <ThemeToggleButton toggleTo={toggleTo} onClick={themeToggler}>{content}</ThemeToggleButton>
      <main id="main">
        <Navbar />
        <Contentcontainer />
      </main>
    </>
  )
}

export default App;
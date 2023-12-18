import { useState, useEffect } from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto">
        <div className="flex items-center">
          <a href="/" className="mr-auto">
            <img src={''} alt="Logo" />
          </a>
        </div>

        <div>
          <a 
            href="#home"
            className={`mr-2 ${activeLink === 'home' ? '' : ''}`}
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </a>
          <a 
            href="#skills"
            className={`mr-2 ${activeLink === 'skills' ? '' : ''}`}
            onClick={() => onUpdateActiveLink('skills')}
          >
            Skills
          </a>
          <a 
            href="#projects"
            className={`mr-2 ${activeLink === 'projects' ? '' : ''}`}
            onClick={() => onUpdateActiveLink('projects')}
          >
            Projects
          </a>
        </div>

        <div className='navbar-text flex items-center space-x-4'>
          <div className='flex gap-2 items-center'>
            <a 
              href='#'
            >
              <FaFacebook />
            </a>
           
            <a 
              href='#'
            >
              <FaTwitter />
            </a>
            
            <a 
              href='#'
            >
              <FaInstagram />
            </a>
          </div>
         
          <button 
            onClick={() => console.log('connect')}
            className="vvd"
          >
            <span>Let’s Connect</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

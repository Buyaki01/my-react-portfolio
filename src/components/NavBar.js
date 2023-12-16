import { useState, useEffect } from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

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

  return (
    <nav className='m-2 flex justify-between'>
      <div href="/">
        <img src={''} alt="" />
      </div>

      <div>
        <a 
          href="#home"
          className='mr-2'
        >
          Home
        </a>
        <a 
          href="#skills"
          className='mr-2'
        >
          Skills
        </a>
        <a 
          href="#projects"
        >
          Projects
        </a>
      </div>

      <div className='flex gap-2'>
        <div className='flex gap-2 items-center'>
          <div>
            <a 
              href='#'
            >
              <FaFacebook />
            </a>
          </div>
          <div>
            <a 
              href='#'
            >
              <FaTwitter />
            </a>
          </div>
          <div>
            <a 
              href='#'
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <button
            onClick={() => console.log('connect')}
          >
            Let's Connect
          </button>
        </div>
      </div>
    </nav>
  )
}

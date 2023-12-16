import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

export const NavBar = () => {
  return (
    <nav className='m-2'>
      <div className='flex gap-2 justify-between'>
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
      </div>
    </nav>
  )
}

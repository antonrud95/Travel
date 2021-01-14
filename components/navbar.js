import { useState } from 'react'
import Link from "next/link";
import Logo from './logo'
import MobileMenu from './mobile-menu'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Fade from 'react-reveal/Fade';
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ logo, links }) => {
  const [isMenuShown, toggleMenu] = useState(false)
  const [isOnTop, setOnTop] = useState(true)
  const openClickHandler = () => {
    toggleMenu(true)
  }
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y >= -50) {
        setOnTop(true)
      } else {
        setOnTop(false)
      }
    },
    [isOnTop]
  )
    const navStyles = 'fixed right-0 left-0 top-0 z-1000'
    return (
      <header className={isOnTop ? classnames(navStyles, 'py-25 lg:py-56 transition-nav') : classnames(navStyles, 'bg-blue py-25 transition-nav')}>
        <div className="container max-w-1118 mx-auto px-4">
          <div className='flex items-center justify-between '>
            <Fade top>
              <Logo logo={logo.logo.url}/>
            </Fade>
            <MobileMenu items={links[0].link} isShown={isMenuShown} toggle={toggleMenu} logo={logo.logo.url}/>
            <FontAwesomeIcon icon={faBars} onClick={openClickHandler} className={'block lg:hidden text-white'}/>
            <Fade top delay={300}>
              <nav className='hidden lg:flex items-center'>
                  {links[0].link.map((link, index) => {
                    return(
                      <Link href="/" key={index}>
                              <a className='transition duration-500 ease-in-out text-18-30 text-white ml-82 border-b-2 border-transparent hover:border-white'>
                                  {link}
                              </a>
                          </Link>
                      )
                  })}
              </nav>
            </Fade>
          </div>
        </div>
      </header> 
    );
  }
  
  export default Navbar;
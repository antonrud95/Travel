import {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import Link from "next/link";

import Logo from '../components/logo'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = ({ isShown, toggle, items, logo }) => {
  const menuRef = useRef(null)
  useEffect(() => {
    isShown ? disableBodyScroll(menuRef.current) : clearAllBodyScrollLocks()
  }, [isShown])
  const closeClickHandler = (e) => {
    e.preventDefault()
    enableBodyScroll(menuRef.current)
    clearAllBodyScrollLocks()
    toggle(false)
  }
  return (
    <div className={isShown ? 'block' : 'hidden'} ref={menuRef}>
      <div className={'fixed right-0 left-0 top-0 bottom-0 z-1000 bg-blue'}>
        <div className='flex items-center py-25 lg:py-56 px-4 justify-between'>
          <Logo logo={logo}/>
          <FontAwesomeIcon icon={faTimes} onClick={closeClickHandler} className='text-white'/>
        </div>
        <nav className={'flex flex-col items-center'}>
            {items.map((item, index) => {
                return(
                    <Link href="/" key={index} >
                        <a className='transition duration-500 ease-in-out text-18-24 text-white mb-xl'>
                            {item}
                        </a>
                    </Link>
                )
            })}
        </nav>
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  isShown: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  items: PropTypes.node.isRequired,
}

export default MobileMenu

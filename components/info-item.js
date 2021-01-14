import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const InfoItem = ({image, title, text, link, isBigger}) => {
    return(
        <div className={!isBigger && 'mb-25 md:mb-0 max-w-310'}>
            <div className={isBigger ? 'mb-35 md:mb-0' : 'mb-35 max-w-66 max-h-66'}> 
                <img src={image} className='w-full h-full'/>
            </div>
            <h3 className={isBigger ? 'text-30-40 mb-24' : 'text-18-24 mb-16'}>{title}</h3>
            <p className='text-16-24 mb-32'>{text}</p>
            <Link href="/">
                <a className='flex items-center text-16-24 uppercase text-blue transition duration-500 ease-in-out'>
                    <p className='mr-xxs hover:mr-24 transition-nav'>{link}</p>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                </a>
            </Link>
        </div>
    )
}
export default InfoItem
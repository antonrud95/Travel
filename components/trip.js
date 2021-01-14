import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Trip = ({title, tripitems, link}) => {
    return(
        <div className='container max-w-1298 mx-auto px-4'>
            <div className='md:flex items-center justify-between mb-24 md:mb-xl'>
                <h2 className='text-h2'>{title}</h2>
                <div className='flex items-center'>
                    <Link href="/">
                        <a className='text-16-24 uppercase text-blue'>
                            {link.link[0]}
                            <FontAwesomeIcon icon={faLongArrowAltRight} className='ml-xxs'/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className='md:flex justify-between flex-wrap'>
                {tripitems.slice(0, 2).map((item, index) => {
                    return(
                        <Link href="/" key={item.id}>
                            <a className='w-full var-width mb-xxs'>
                                <div style={{ backgroundImage: `url(${item.image.url})` }} className='bg-cover overflow-hidden h-200 lg:h-354 w-full'>
                                    <h2 className='flex h-full items-end text-white title-bold pl-15 pb-15 lg:pl-30 lg:pb-30'>{item.title}</h2>
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </div>
            <div className='flex w-full justify-between flex-wrap'>
                {tripitems.slice(2, 6).map((item, index) => {
                    return(
                        <Link href="/" key={item.id}>
                            <a className='w-full var-second-width mb-xxs'>
                                <div style={{ backgroundImage: `url(${item.image.url})` }} className='bg-cover overflow-hidden h-170 lg:h-283'>
                                    <h2 className='flex h-full items-end text-white title-bold pl-15 pb-15 lg:pl-30 lg:pb-30'>{item.title}</h2>
                                </div>
                            </a>
                        </Link>
                        
                    )
                })}
            </div>
        </div>
    )
}
export default Trip
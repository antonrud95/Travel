import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const ArticleItem = ({isReverse, img, title, text, link}) => {
    return(
        <div className={isReverse ? 'mb-sm md:mb-xxl md:flex flex-row-reverse' : 'mb-sm md:mb-xxl md:flex'}>
            <div className='lg:min-w-597 lg:h-354'>
                <img src={img} className='w-full h-full'/>
            </div>
            <div className={isReverse ? 'md:mr-35 xl:pt-70 xl:mr-108' : 'md:ml-35 xl:ml-108 xl:pt-70'}>
                <h3 className='text-30-40 mb-24'>{title}</h3>
                <p className='text-16-24 mb-32'>{text}</p>
                <Link href="/">
                    <a className='text-blue flex items-center'>
                        <p className='mr-xxs hover:mr-24 transition-nav '>
                            {link}
                        </p>
                        <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default ArticleItem
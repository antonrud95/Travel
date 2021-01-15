import Button from './button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

const Visit = ({title, visititems}) => {
    return(
        <div className='container max-w-1298 mx-auto px-4'>
            <Fade bottom>
                <div className='relative'>
                    <h2 className='text-h2 mb-sm lg:mb-64 pb-5'>{title}</h2>
                    <span className='absolute bottom-0 left-0 right-0 h-2 max-w-260 bg-blue'/>
                </div>
            </Fade>
            <Fade bottom delay={300}>
                <div className='md:flex flex-wrap justify-between'>
                    {visititems.map((item, index) => {
                        return(
                            <div key={item.id} className='mx-auto mb-24 md:mb-35 lg:mb-58 lg:mx-0 max-w-470 lg:w-3/6 xl:w-2/6  xl:max-w-386'>
                                <div className='relative mb-24 md:mb-45'>
                                    <img src={item.image.url}/>
                                    <div className='absolute bottom-0 left-0 right-0 flex items-center justify-between px-25 py-15 bg-black-block'>
                                        <p className='text-white text-18-24 uppercase'>{item.town}</p>
                                        <div className='flex items-center text-white text-16-24'>
                                            <div className='flex items-center mr-16'>
                                                <p className='mr-4'>{item.likes}</p>
                                                <FontAwesomeIcon icon={faHeart}/>
                                            </div>
                                            <div className='flex items-center'>
                                                <p className='mr-4'>{item.comments}</p>
                                                <FontAwesomeIcon icon={faCommentAlt}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-16-24 mb-sm'>{item.text}</p>
                                <Button 
                                type={item.button.type} 
                                link={item.button.link}
                                additionalClassName={'bg-blue text-white uppercase text-14-17 py-13 px-20'}
                                >
                                    {item.button.name}
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </Fade>
        </div>
    )
}
export default Visit
import Link from "next/link";
import Fade from 'react-reveal/Fade';

const Footer = ({logo, companies}) => {
    return(
        <div className='bg-dark py-45 lg:py-110'>
            <div className='container mx-auto px-4 max-w-1298 md:flex justify-between'>
                <div>
                    <Fade bottom>
                        <img src={logo.logo.url}/>
                    </Fade>
                </div>
                <Fade bottom delay={300}>
                    <div className='md:flex'>
                        {companies.map((companie) => {
                            return(
                                <div key={companie.id} className='flex flex-col md:ml-xl xl:ml-120 mb-xs md:mb-0'>
                                    <h3 className='text-white text-18-24 mb-11'>{companie.title}</h3>
                                    {companie.links[0].link.map((item, index) => (
                                        <Link href="/" key={index}>
                                            <a className='text-white hover:text-hovered transition duration-300 ease-in-out text-16-24 mb-6'>{item}</a>
                                        </Link>
                                    ))}
                                </div>
                            )
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default Footer
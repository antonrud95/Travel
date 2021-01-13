import Button from '../components/button';
import Fade from 'react-reveal/Fade';
import Input from './input'

const Hero = ({ title, text, button, inputs, bgimage }) => {
    return (
      <div className='relative pb-372'>
        <div className='absolute right-0 left-0 top-0 bottom-0 -z-10'>
          <img src={bgimage.url} className='w-full h-full object-cover'/>
        </div>
        <div className='container max-w-1118 mx-auto px-4'>
          <div className='pt-270 pb-60'>
            <Fade bottom>
              <h1 className='text-white text-h1 mb-xs max-w-633'>{title}</h1>
            </Fade>
            <Fade bottom delay={300}>
              <p className='text-white text-16-24 max-w-546'>{text}</p>
            </Fade>
          </div>
          <Fade cascsde bottom>
            <div className='lg:flex'>
              {inputs.map((input, index) => {
                return(
                  <Input text={input.placeholder} type={input.type} key={index} />
                )
              })}
              <Button type={button.type} link={button.link} additionalClassName={'text-white uppercase text-24-29 px-40 py-15 bg-blue rounded-sm'}>
                {button.name}
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
  
  export default Hero;
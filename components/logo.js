import Link from "next/link";

const Logo = ({logo}) => {
    return (
      <div className='flex h-31'>
        <Link href="/">
            <a>
              <img src={logo} className='h-full'/>
            </a>
        </Link>
      </div>
    );
  }
  
  export default Logo;
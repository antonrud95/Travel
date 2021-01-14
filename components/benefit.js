import InfoItem from './info-item'

const Benefit = ({title, infoitems}) => {
    return(
        <div className='container max-w-1262 mx-auto negative-top bg-white'>
            <div className='container max-w-1118 mx-auto px-4 pt-35 lg:pt-95 pb-60 lg:pb-110 '>
                <h1 className='text-h2 mb-58 lg:mb-120'>{title}</h1>
                <div className='md:flex md:justify-between'>
                    {infoitems.map((infoitem) => {
                        return(
                            <InfoItem
                                key={infoitem.id} 
                                image={infoitem.image.url}
                                title={infoitem.title}
                                text={infoitem.text}
                                link={infoitem.link.link}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Benefit
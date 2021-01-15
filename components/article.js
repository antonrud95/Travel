import ArticleItem from './article-item';
import Fade from 'react-reveal/Fade';

const Article = ({infoitems}) => {
    return(
        <div className='container max-w-1298 mx-auto px-4 py-40 lg:py-131'>
            {infoitems[0] && (
                <Fade bottom>
                    <ArticleItem
                    key={infoitems[0].id} 
                    img={infoitems[0].image.url}
                    title={infoitems[0].title}
                    text={infoitems[0].text}
                    link={infoitems[0].link.link[0]}
                    />
                </Fade>
            )}
            {infoitems[1] && (
                <Fade bottom delay={300}>
                    <ArticleItem
                    key={infoitems[1].id} 
                    img={infoitems[1].image.url}
                    title={infoitems[1].title}
                    text={infoitems[1].text}
                    link={infoitems[1].link.link[0]}
                    isReverse
                    />
                </Fade>
            )}
        </div>
    )
}
export default Article
import { NavLink, useParams } from 'react-router-dom'

const NewsSummary = ({news}) => {
    const {id} = useParams()

    const fullNews = news.map(singleNews =>
        <>
            <div key={singleNews} className='singleNews'>
                <NavLink target='_blank' rel='noopoener noreferrer' to={singleNews.webUrl}>
                    <h4>{singleNews.fields.headline}</h4>
                </NavLink>
                <img src={singleNews.fields.thumbnail} alt='' className='img-thumbnail center' />
                <p>{singleNews.fields.bodyText}</p>
            </div>
        </>)[id]

        return(
            <>
                {!news.length && <div>News Summary not available</div>}
                {!Object.keys(fullNews).length === 0 && <div>Processing News</div>}
                {Object.keys(fullNews).length > 0 && <> {fullNews}</>}
            </>
        )
}

export default NewsSummary
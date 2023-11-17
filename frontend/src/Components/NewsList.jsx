import { NavLink } from 'react-router-dom'

const NewsList = ({news}) => {
    
    const newsPost = news.map((singleNews, index) => (
        <div className='col-sm-8 col-md-6 col-lg-4' key={singleNews.id} id={index} >
            <NavLink to={`/summary/${index}`}>
                <img src={singleNews.fields.thumbnail} alt='' className='img-thumbnail fluid' />
                <div>
                    <h4>{singleNews.fields.headline}</h4>
                </div>
            </NavLink>
        </div>
    ))

    return(
        <>
            <h1>News Feed</h1>
            {news.lenght === 0 && <h3 key='loading'>Data is loading...</h3>}
            {news.lenght > 0 && newsPost}
            {newsPost}
        </>
    )
}

export default NewsList
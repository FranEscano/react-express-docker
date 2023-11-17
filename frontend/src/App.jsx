import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './Components/Header'
import NewsList from './Components/NewsList.jsx'
import NewsSummary from './Components/NewsSummary.jsx'

function App(){

  const [news, setNews] = useState([]);
  const [error, setError] = useState({});

  const getNewsdata = async () => {

    const news = await axios.get('http://localhost:3001/news ')

    if(news?.error){
      setError(news)
      setNews([])
    }
    if(!news?.error){
      setNews(news.data.news)
      setError({})
    }
  }

  useEffect(() => {
    getNewsdata()
  }, [])

  return (
    <Router>
      <Header />
      {error && Object.keys(error.length > 0 && <h2>No News to display</h2>)}
      <Routes>
        <Route path='/' element={
          (!error || Object.keys(error).length === 0) &&
          <div className='container fluid'>
            <div className='row'>
              <NewsList news={news} />
            </div>
          </div>
        } />
        <Route path='/summary/:id' element={
          (!error || Object.keys(error).length === 0) &&
          <div className='container fluid'>
            <div className='row'>
              <NewsSummary news={news} />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App;

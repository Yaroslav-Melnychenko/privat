import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = (props) => {

  const [ posts, setPosts ] = useState([]);

  useEffect(() => { 
    axios.get(`https://newsapi.org/v2/top-headlines?country=ru&from=${props.match.params.id}&to=${props.match.params.id}&pageSize=1&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(news => {
        setPosts(news.data.articles);
        window.console.log(news.data.articles, props.match.params.id, posts);
      });
   }, []);

  return (
    <div>
      {
        posts.map((news => <li key={Math.random()}>{ news.title }</li>))
      }
    </div>
  )
}

export default News;
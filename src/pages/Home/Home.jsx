import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Home.scss';

const Home = () => {

  const [ posts, setPosts ] = useState([]);

  const applyNews = (search) => {
    if (search === null) {
      axios.get(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(news => {
        setPosts(news.data.articles);
      });
    } else {
      axios.get(`https://newsapi.org/v2/everything?q=${search}&from=&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(news => {
        setPosts(news.data.articles);
      });
    }
  }

  useEffect(() => { applyNews() }, []);

  const findNews = (e) => {
    const text = e.target.value;
    if (text !== '') applyNews(text)
    else applyNews()
  }

  return (
    <div className={styles.container}>
      <h1>Последние новости</h1>
      <span>Найти новость: </span> 
      <input type="text" onChange={findNews} />
      {
        posts.map(post => (
          <div key={Math.random()} className={styles.newsContainer}>
            <h3>{post.title}</h3>
            <p><i>{post.publishedAt.split('T')[ 0 ]}</i></p>
            <img src={post.urlToImage} alt="" />
            <p>{post.description}</p>
            <a href={post.url} target="_blank" rel="noopener noreferrer">Посмотреть</a>
          </div>
        ))
      }
    </div>
  )
};

export default Home;

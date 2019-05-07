import React, { useEffect, useState } from 'react';
import { getNews, getNewsBySearch } from 'Services/api';
import OneNews from './OneNews';
import styles from './Home.scss';

const Home = () => {

  const [ posts, setPosts ] = useState([]);

  const fetchNews = () => {
    getNews().then(news => {
      setPosts(news.data.articles);
    });
  }

  const searchNews = (search) => {
    getNewsBySearch(search).then(news => {
      setPosts(news.data.articles);
    });
  }

  useEffect(() => { fetchNews() }, []);

  const findNews = (e) => {
    const text = e.target.value;
    if (text) { 
      searchNews(text); 
    } else {
      fetchNews();
    }
  }

  return (
    <div className={styles.container}>
      <h1>Последние новости</h1>
      <span>Найти новость: </span> 
      <input className={styles.input} type="text" onChange={findNews} />
      {
        posts.map(post => <OneNews key={post.url} {...post} />)
      }
    </div>
  )
};

export default Home;

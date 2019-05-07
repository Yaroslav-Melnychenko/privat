import React from 'react';
import { string } from 'prop-types';
import styles from './Home.scss';

const OneNews = (props) => {
  const { url, urlToImage, title, description, publishedAt } = props;
  return (
    <div key={url} className={styles.newsContainer}>
      <div>{urlToImage ? <img src={urlToImage} alt="" /> : null }</div>
      <div>
        <h3 className={styles.mt0}>{title}</h3>
        <p>{description}</p>
        <p><i>{publishedAt.split('T')[ 0 ]}</i></p>
        <a href={url} className={styles.link} target="_blank" rel="noopener noreferrer">Посмотреть</a>
      </div>
    </div>
  )
}
OneNews.propTypes = {
  url: string.isRequired,
  urlToImage: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  publishedAt: string.isRequired
};
export default OneNews;
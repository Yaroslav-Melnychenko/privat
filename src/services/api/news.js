import axios from 'axios';

import { NEWS_PUBLIC_INFO, NEWS_PUBLIC_INFO_QUERY } from './constants';

export const getNews = () => {
  return axios.get(`${NEWS_PUBLIC_INFO}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
};

export const getNewsBySearch = (search) => {
  return axios.get(`${NEWS_PUBLIC_INFO_QUERY}?q=${search}&from=&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
}
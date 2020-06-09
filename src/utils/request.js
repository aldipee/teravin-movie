import axios from 'axios';
import {API, API_KEY} from './config';

export const getData = async (page) => {
  const req = await axios({
    method: 'GET',
    url: `${API.API_URL.concat(`&page=${page}`)}`,
  });
  return req.data;
};

export const getMovieDetail = async (idMovie) => {
  const url = `${API.API_URL_DETAIL.concat(idMovie)}?api_key=${API_KEY}`;
  const req = await axios({
    method: 'GET',
    url,
  });
  return req.data;
};

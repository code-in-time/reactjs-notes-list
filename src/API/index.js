import axios from 'axios';

/**
 * This will contain the APIs.
 * This is what it could look like after the API call is complete.
 *  .then((response) => {
 *   console.log(response);
 *  })
 *  .catch((error) => {
 *    console.log(error);
 * });
 */

/**
  * Search for a movie.
  * @param {string} text - the text of the movie to search
  * @returns promise
  */
export const apiMovieSearch = text => axios.get(`${process.env.REACT_APP_OMDBAPI_URL}&t=${text}`);

/**
 * This a mock API call
 */
export const apiMock = () => axios.get(process.env.REACT_APP_MOCKAPI_URL);

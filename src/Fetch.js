


import { useState, useEffect } from "react";
export const API_URL = `https://api.tvmaze.com/search/shows`;
export const Deafult = "https://api.tvmaze.com/shows";

const Fetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);
  const [searchmovie, setSearchMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      let queryurl = url.includes('q');
      if (queryurl) {
        const res = await fetch(url);
        const data = await res.json();
        setIsLoading(false);
        setSearchMovie(data);
        setIsError({ show: "false", msg: "" });
      } else {
        const res = await fetch(url);
        const data = await res.json();
        setIsLoading(false);
        setMovie(data);
        setIsError({ show: "false", msg: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    let timeOut = setTimeout(() => {

      apiParams == "" ? getMovie(`${Deafult}`) : getMovie(`${API_URL}?q=${apiParams}`);
    }, 1000);

    return () => {
      clearTimeout(timeOut);

    };
  }, [apiParams]);


  return { isLoading, isError, movie, searchmovie };

};

export default Fetch;
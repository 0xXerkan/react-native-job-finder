import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env';

import { mockData } from "../constants/mockData";



const useFetch = (endpoint, query) => {
  const [data, setData ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [useMockData, setUseMockData] = useState(false);

  const RAPID_API_KEY = '387aeb8b2emshd7206ea289e6e7ap19c4ebjsn092268ed9f2a';

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      if (useMockData) {
        setData(mockData.search);

      } else {
        const response = await axios.request(options);
        setData(response.data.data);
      }

    } catch (error) {
      alert('There is an error')      
    } finally {
      setIsLoading(false);
    }
  }

  useEffect (() => {
    fetchData()
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }


  return { data, isLoading, error, refetch };
}

export default useFetch;
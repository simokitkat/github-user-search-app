import { useEffect, useState } from "react";

export default function useFetchData(link) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(link);

      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        return;
      }

      const data = await response.json();

      setIsLoading(false);
      setData(data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { isError, setIsError, isLoading, data, fetchData };
}

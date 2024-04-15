import { Dispatch, useEffect, useState } from "react";

function useFetch<T>(URL: RequestInfo | URL, OPTIONS: RequestInit | undefined): [
  data: T | null,
  loading: boolean,
  error: string | null,
] {
  const [ data, setData ] = useState<T | null>(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(URL, OPTIONS);
      const dataApi = await response.json();
      setData(dataApi)
    } catch (e) {
      if(e instanceof Error) setError(e.message);
    } finally {
      setLoading(false)
      setError(null)
    }
  }

  useEffect(() => {
    fetchData()
  }, [URL])

  return [data, loading, error];
}

export default useFetch;
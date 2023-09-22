import { useEffect, useState } from "react";
import axios from "axios";

function useIPInfo() {
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch IP information
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        setIpInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { ipInfo, loading, error };
}

export default useIPInfo;

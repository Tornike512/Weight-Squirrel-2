import { useState, useEffect } from "react";

import axios from "axios";

interface TIp {
  ipAddress: string[];
}

export default function useGetIpAddress() {
  const [ip, setIp] = useState<TIp[]>([]);
  const [apiLoaded, setApiLoaded] = useState<boolean>(false);

  async function getIp() {
    try {
      const response = await axios.get(
        "https://squirrel-2-backend-5.onrender.com/api/get"
      );
      setIp(response.data);
      setApiLoaded(true);
    } catch (error) {
      console.log("Error Loading Ip Addressed", error);
    }
  }

  useEffect(() => {
    getIp();
  }, []);

  return { ip, apiLoaded };
}

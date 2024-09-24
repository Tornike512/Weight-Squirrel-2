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
      const response = await axios.get("http://localhost:4500/api/get");
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

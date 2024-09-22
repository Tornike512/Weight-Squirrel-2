import { useState, useEffect } from "react";

import axios from "axios";

export default function useGetIpAddress() {
  const [ip, setIp] = useState();

  async function getIp() {
    try {
      const response = await axios.get("http://localhost:4500/api/get");
      setIp(response.data);
    } catch (error) {
      console.log("Error Loading Ip Addressed", error);
    }
  }

  useEffect(() => {
    getIp();
  }, []);

  return { ip };
}

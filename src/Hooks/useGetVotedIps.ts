import { useState, useEffect } from "react";

import axios from "axios";

export const useGetVotedIps = () => {
  const [votedIps, setVotedIps] = useState<string[]>([]);

  async function getVotedIps() {
    try {
      const response = await axios.get("http://localhost:4500/api/getVoted");
      setVotedIps(response.data);
    } catch (error) {
      console.log("Error loading voted ips", error);
    }
  }

  useEffect(() => {
    getVotedIps();
  }, []);

  return { votedIps };
};

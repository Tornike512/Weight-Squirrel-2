import { useState, useEffect } from "react";

import axios from "axios";

export const useGetVotedIps = () => {
  const [votedIps, setVotedIps] = useState<any[]>([]);

  async function getVotedIps() {
    try {
      const response = await axios.get(
        "https://squirrel-2-backend-6.onrender.com/api/getVoted"
      );
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

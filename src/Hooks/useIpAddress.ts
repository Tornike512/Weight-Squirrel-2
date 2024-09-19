import { useEffect } from "react";

import axios from "axios";

export const useIpAddress = async () => {
  try {
    const response = await axios.post("http://localhost:4500/api/update", {
      ipAddress: String,
    });
  } catch (error) {
    console.log("Error Sending Post Request", error);
  }
};

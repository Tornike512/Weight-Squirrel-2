import axios from "axios";

export const postVotedIps = async () => {
  try {
    const response = await axios.post("http://localhost:4500/api/voted");
    console.log(response.data);
  } catch (error) {
    console.log("Error sending voted ips", error);
  }
};

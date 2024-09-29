import axios from "axios";

export const postVotedIps = async () => {
  try {
    const response = await axios.post(
      "https://squirrel-2-backend-5.onrender.com/api/voted"
    );
    console.log(response.data);
  } catch (error) {
    console.log("Error sending voted ips", error);
  }
};

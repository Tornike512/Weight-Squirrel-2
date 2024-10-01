import axios from "axios";

export const postVotedIps = async (newUser: string) => {
  try {
    const response = await axios.post(
      "https://squirrel-2-backend-6.onrender.com/api/voted",
      {
        votedIp: newUser,
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log("Error sending voted ips", error);
  }
};

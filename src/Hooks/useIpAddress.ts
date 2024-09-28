import axios from "axios";

export const useIpAddress = async () => {
  try {
    const response = await axios.post(
      "https://squirrel-2-backend.onrender.com/api/update",
      {
        ipAddress: String,
      }
    );
    console.log(response);
  } catch (error) {
    console.log("Error Sending Post Request", error);
  }
};

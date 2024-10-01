import axios from "axios";

export const useIpAddress = async () => {
  try {
    const response = await axios.post(
      "https://squirrel-2-backend-6.onrender.com/api/update"
    );
    console.log(response.data);
  } catch (error) {
    console.log("Error Sending Post Request", error);
  }
};

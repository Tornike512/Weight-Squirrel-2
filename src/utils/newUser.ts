import useGetIpAddress from "../Hooks/useGetIpAddress";
import { removeDuplicates } from "./removeDuplicates";

const { ip } = useGetIpAddress();

export const newUser = removeDuplicates(ip)[removeDuplicates(ip).length - 1];

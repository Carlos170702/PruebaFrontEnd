import axios  from "axios";

export const resClients = async (options) => {
  const { data } = await axios.request(options);

  return data;
};

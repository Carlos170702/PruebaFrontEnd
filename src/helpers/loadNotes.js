import { resClients } from "../api/getClients";

export const getClients = async () => {
  const data = await resClients({
    method: "GET",
    url: "http://192.168.0.36:4000/listEmployes",
  });
  
  if(!data.status) return [];

  return data.employes;
};

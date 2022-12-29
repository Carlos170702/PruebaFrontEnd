import { resClients } from "../api/getClients";

export const insertClient = async (data = {}) => {
  try {
    const res = await resClients({
      method: "POST",
      url: "http://192.168.0.36:4000/registerEmploye",
      data: data,
    });

    if (!res.status) return [];
    return res;
  } catch (error) {
    return {
      error: error.response.data.err.errors,
      status: false
    };
  }
};

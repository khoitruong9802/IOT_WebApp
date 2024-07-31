import request from "../utils/http";
import axios from "axios";

export const loginCustomer = async (data) => {
  const res = await request.post(
    "/customer/login",
    data
  );
  return res;
};

export const createCustomer = async (data) => {
  const res = await request.post(
    "/customer",
    data
  );
  return res;
}

export const getNewToken = async (refreshToken) => {
  let res;
  try {    
    res = await axios.post(`${import.meta.env.VITE_API_URL}/customer/refresh-token`, {}, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    })
  } catch (error) {
    console.log(error);
  }
  return res?.data;
};

export const logoutCustomer = async () => {
  const res = await request.post("/customer/logout");
  return res.data;
};

// export const updateCustomer = async (id, data, accessToken) => {
//   const res = await request.put(
//     `/customer/update-customer/${id}`,
//     data,
//     {
//       headers: {
//         token: `Bearer ${accessToken}`,
//       },
//     }
//   );
//   return res.data;
// };

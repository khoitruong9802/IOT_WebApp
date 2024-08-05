import request from "../utils/http";

export const getMemberOfStation = async (stationId) => {
  let res;
  try {
    res = await request.get(`/station/${stationId}/member`);
  } catch (error) {
    console.log(error)
  }
  return res;
}
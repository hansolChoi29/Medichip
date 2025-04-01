// 병상 가용 정보 API 호출

import axios from "axios";

const BASE_URL = "http://apis.data.go.kr/1471000/HospBedStatusService";

export async function getHospBedStatus(pageNo = 1, numOfRows = 10) {
  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY;
  const response = await axios.get(`${BASE_URL}/getHospBedStatus`, {
    params: {
      serviceKey,
      pageNo,
      numOfRows,
      resultType: "json",
    },
  });
  return response.data;
}

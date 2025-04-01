// getHospBasisList, getHospDetailInfo, getHospDiagDeptList 호출

import axios from "axios";

const BASE_URL = "http://apis.data.go.kr/B551182/hospInfoService";

export async function getHospBasisList(pageNo = 1, numOfRows = 10) {
  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY;
  const response = await axios.get(`${BASE_URL}/getHospBasisList`, {
    params: {
      serviceKey,
      pageNo,
      numOfRows,
      resultType: "json",
    },
  });
  return response.data;
}

export async function getHospDetailInfo(ykiho: string) {
  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY;
  const response = await axios.get(`${BASE_URL}/getHospDetailInfo`, {
    params: {
      serviceKey,
      ykiho,
      resultType: "json",
    },
  });
  return response.data;
}

export async function getHospDiagDeptList(ykiho: string) {
  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY;
  const response = await axios.get(`${BASE_URL}/getHospDiagDeptList`, {
    params: {
      serviceKey,
      ykiho,
      resultType: "json",
    },
  });
  return response.data;
}

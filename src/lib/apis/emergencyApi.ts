import axios from "axios";

// 응급실 관련 API 호출 함수
const BASE_URL = "http://apis.data.go.kr/B552657/ErmctInfoInqireService";
const serviceKey = decodeURIComponent(
  process.env.NEXT_PUBLIC_SERVICE_KEY || ""
);

export async function getEmergencyMedicalInfo(
  pageNo = 1,
  numOfRows = 10,
  stage1 = "서울특별시",
  stage2 = "강남구"
) {
  const response = await axios.get(
    `${BASE_URL}/getEmrrmRltmUsefulSckbdInfoInqire`,
    {
      params: {
        serviceKey,
        pageNo,
        numOfRows,
        STAGE1: stage1,
        STAGE2: stage2,
        resultType: "json",
      },
    }
  );
  return response.data;
}

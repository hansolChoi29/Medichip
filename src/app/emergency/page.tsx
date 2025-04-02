"use client";

import { useState } from "react";
import { getEmergencyMedicalInfo } from "@/lib/apis/emergencyApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function EmergencyPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isPending, error } = useQuery({
    queryKey: ["emergencyInfo"],
    queryFn: async () => {
      const res = await getEmergencyMedicalInfo(1, 10, "서울특별시", "강남구");
      console.log("res", res);
      if (
        res &&
        res.cmmMsgHeader &&
        res.cmmMsgHeader.errMsg &&
        res.cmmMsgHeader.errMsg !== "NORMAL SERVICE"
      ) {
        throw new Error(res.cmmMsgHeader.errMsg);
      }

      if (
        res &&
        res.response &&
        res.response.body &&
        res.response.body.items &&
        res.response.body.items.item
      ) {
        return res.response.body.items.item;
      } else if (res && res.body && res.body.items && res.body.items.item) {
        return res.body.items.item;
      } else {
        throw new Error("No valid emergency data returned from API.");
      }
    },
  });

  if (isPending) {
    return <div style={{ fontSize: 36 }}>로딩중...</div>;
  }

  if (error) {
    return (
      <div style={{ fontSize: 24 }}>
        에러가 발생했습니다: {(error as Error).message}
      </div>
    );
  }

  // 필터링: 예를 들어 병원명 (dutyname) 기준으로 필터링
  const filteredData = data.filter((item: any) =>
    (item.dutyname || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section style={{ padding: "20px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>응급실 정보</h1>
        {/* 검색 입력창 */}
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="병원명을 입력하세요..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredData.length === 0 ? (
          <p>조회된 응급실 정보가 없습니다.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {filteredData.map((item: any) => (
              <li
                key={item.hpid}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <h2> {item.dutyname}</h2>
                <p>주소</p>
                <p>전화번호: {item.dutyTel3}</p>

                <p>실시간 이용가능 병상</p>
                <p>응급실: {item.hvec}</p>
                <p>수술실: {item.hvoc}</p>
                <p>신경중환자실 병상 수: {item.hvcc}</p>
                <p>신생중환자실 병상 수: {item.hvncc}</p>
                <p>흉부중환자실 병상 수: {item.hvccc}</p>
                <p>일반중환자실 병상 수: {item.hvicc}</p>

                <p>이용가능 의료자원</p>
                <p>CT 가용 여부: {item.hvctayn}</p>
                <p>MRI 가용 여부: {item.hvmriayn}</p>
                <p>조영촬영기 가용 여부: {item.hvangioayn}</p>
                <p>인공호흡기 가용 여부: {item.hvventiayn}</p>
                <p>구급차 가용 여부: {item.hvamyn}</p>
                <button onClick={() => router.push(`/emergency/${item.hpid}`)}>
                  상세정보 보기
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

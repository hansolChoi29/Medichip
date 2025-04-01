"use clinet";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-15 items-center justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <div className="rounded-sm w-40 h-50 shadow-md mb-8 flex flex-col items-center  justify-center ">
        <Link
          href="/emergency"
          className="text-[10px] flex flex-col items-center  justify-center "
        >
          <img
            src="/icons/emergency.svg"
            alt="emergency"
            className="w-[77px] h-[60px] mb-4"
          />
          응급실 찾기
        </Link>
      </div>

      <div className=" w-40 h-50 rounded-sm shadow-md flex flex-col items-center justify-center">
        <Link
          href="/hospital"
          className="flex flex-col items-center text-[10px]  justify-center "
        >
          <img
            src="/icons/hospital.svg"
            alt="hospital"
            className="w-[75px] h-[75px] mb-4"
          />
          가까운 병원 찾기
        </Link>
      </div>
    </div>
  );
}

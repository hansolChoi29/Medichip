"use client";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useState } from "react";

export default function HospitalPage() {
  // const [inputValue, setInputValue] = useState("");
  // const [filteredKeywords, setFilteredKeywords] = useState([]);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   setInputValue(value);

  //   if (value.trim()) {
  //     // 입력한 값에 따라 키워드를 필터링합니다.
  //     const filtered = keywords.filter((keyword) =>
  //       keyword.toLowerCase().includes(value.toLowerCase())
  //     );
  //     setFilteredKeywords(filtered);
  //     setDropdownOpen(true);
  //   } else {
  //     setDropdownOpen(false);
  //   }
  // };

  // const handleItemClick = (keyword) => {
  //   setInputValue(keyword);
  //   setDropdownOpen(false);
  // };

  return (
    <section className="mx-auto mb-12 flex w-full max-w-[1240px] flex-col px-6 pt-[58px]">
      <div className="flex items-center justify-center">
        <img src="/icons/hospital.svg" alt="hospital" className="w-14 h-14" />
        <p className="text-title-01 font-bold">가까운 병원 찾기</p>
      </div>
      {/* <div className="relative">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="키워드를 입력하세요"
          onFocus={() => inputValue && setDropdownOpen(true)}
        />
        {dropdownOpen && filteredKeywords.length > 0 && (
          <div className="absolute z-10 w-full border rounded bg-white shadow-md">
            {filteredKeywords.map((keyword) => (
              <div
                key={keyword}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleItemClick(keyword)}
              >
                {keyword}
              </div>
            ))}
          </div>
        )}
      </div> */}
      <div>
        <p className="text-title-02">현재위치</p>
        <div className="flex flex-row">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Input />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <img src="icons/location.svg" alt="location" />
        </div>
      </div>

      <div>
        <p>진료과목</p>
        <Input />
        <img src="/icons/location.svg" alt="search" />
      </div>
    </section>
  );
}

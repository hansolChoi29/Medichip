/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/globals.css", // globals.css가 포함된 경로도 추가
  ],
  theme: {
    extend: {
      fontSize: {
        // text-title-02가 적용되길 원하는 경우, CSS 변수(--text-title-02 등)가 정의되어 있어야 합니다.
        "title-02": [
          "var(--text-title-02)",
          {
            lineHeight: "var(--text-title-02--line-height)",
            letterSpacing: "var(--text-title-02--letter-spacing)",
          },
        ],
        // 만약 text-title-01를 쓰고 싶다면 이미 정의된 변수를 활용할 수 있습니다.
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

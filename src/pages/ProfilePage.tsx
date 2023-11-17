// Trong file ProfilePage.tsx
import React, { useState, useEffect } from "react";
import "../App.css";

const ProfilePage: React.FC = () => {
  const [textColor, setTextColor] = useState<string>("#00afd6"); // Màu chữ ban đầu

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextColor((prevColor) =>
        prevColor === "#00afd6" ? "#fe3500" : "#00afd6"
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Chạy một lần khi component được render

  return (
    <div id="profile">
      <img
        className="face1"
        src="./z4209884034569_c2688118104a54e5d43d24c181bac0fe.jpg"
        alt="Ảnh đại diện"
      />
      <img
        className="face"
        src="./z4089865144054_88dd3b493a628017cf2898ea5e1f03ea.jpg"
        alt=""
      />
      <h1 style={{ color: textColor }}>Nguyễn Thành Thắng</h1>
      <p style={{ color: textColor }}>Tuổi: 22</p>
      <p style={{ color: textColor }}>Quê quán: Điện Biên</p>
      <p style={{ color: textColor }}>Định hướng: Cái gì nhiều tiền thì làm</p>
      <div id="languages">
        <p style={{ color: textColor }}>Ngôn ngữ đã học:</p>
        <ul>
          <li style={{ color: textColor }}>Korean</li>
          <li style={{ color: textColor }}>JavaScript</li>
          <li style={{ color: textColor }}>C++</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;

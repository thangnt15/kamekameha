// Trong file App.js hoặc nơi bạn muốn thêm chức năng này
import React, { useState, useEffect } from 'react';
import '../App.css';

const ProfilePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const profileElement = document.getElementById('profile');

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    profileElement.addEventListener('mouseenter', handleMouseEnter);
    profileElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      profileElement.removeEventListener('mouseenter', handleMouseEnter);
      profileElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const textColor = isHovered ? 'red' : 'blue'; // Chọn màu chữ tùy thuộc vào trạng thái hover

  return (
    <div id="profile">
      <img
        className="face1"
        src="https://inkythuatso.com/uploads/thumbnails/800/2022/07/tranh-phong-canh-doi-nui-dep-2-inkythuatso-22-09-53-09.jpg"
        alt="Ảnh đại diện"
      />
      <img
        className="face"
        src="https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png"
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

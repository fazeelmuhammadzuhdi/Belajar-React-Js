import React from "react";

const Top = () => {
  //handling with function

  // function handleMessage() {
  //   alert("Halo Selamat Pagi dunia");
  // }

  //handle pesan menggunakan parameter
  const handleMessage = (value, e) => {
    e.preventDefault();
    alert("Halo selamat Pagi");
    alert(value);
  };

  return (
    <a href="/" onClick={(e) => handleMessage("FAZEEL", e)}>
      Top Mantap Is The best
    </a>
  );
};

export default Top;

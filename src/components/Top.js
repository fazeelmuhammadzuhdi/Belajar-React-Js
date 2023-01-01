import React from "react";

const Top = () => {
  //handling with function

  // function handleMessage() {
  //   alert("Halo Selamat Pagi dunia");
  // }

  //handle pesan menggunakan parameter
  const handleMessage = (value) => {
    alert("Halo selamat Pagi");
    alert(value);
  };

  return (
    <a href="/" onClick={() => handleMessage("FAZEEL")}>
      Top Mantap Is The best
    </a>
  );
};

export default Top;

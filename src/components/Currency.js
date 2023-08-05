import axios from "axios";
import React, { useEffect, useState } from "react";

// const Currency = () => {
//   const [data, setData] = useState([]);

//   const API_KEY = "785eda46e2fd4228a00eb0e931839141";

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.currencyfreaks.com/latest?apikey=${API_KEY}`
//       );
//       // console.log(response);
//       const result = Object.keys(response.data.rates)
//         .filter((key) => {
//           return (
//             key === "CAD" ||
//             key === "EUR" ||
//             key === "IDR" ||
//             key === "JPY" ||
//             key === "CHF" ||
//             key === "GBP"
//           );
//         })
//         .map((item) => {
//           return {
//             name: item,
//             rate: +response.data.rates[item],
//           };
//         });
//       setData(result);
//       // console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const buy = (data) => {
//     return data + (5 / 100) * data.toFixed(4);
//   };

//   const sell = (data) => {
//     return data - (5 / 100) * data.toFixed(4);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Currency</th>
//             <th>We Buy</th>
//             <th>Exchange Rate</th>
//             <th>We Sell</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((value, id) => (
//             <tr key={id}>
//               <td>{value.name}</td>
//               <td>{Number(buy(value.rate)).toFixed(4)}</td>
//               <td>{Number(value.rate).toFixed(4)}</td>
//               <td>{Number(sell(value.rate)).toFixed(4)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

const Currency = () => {
  const [data, setData] = useState([]);

  const API_KEY = "785eda46e2fd4228a00eb0e931839141";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.currencyfreaks.com/latest?apikey=${API_KEY}`
      );

      const result = Object.keys(response.data.rates)
        .filter((key) => {
          return (
            key === "CAD" ||
            key === "EUR" ||
            key === "IDR" ||
            key === "JPY" ||
            key === "CHF" ||
            key === "GBP"
          );
        })
        .map((item) => {
          return {
            name: item,
            rate: +response.data.rates[item],
          };
        });
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const buy = (data) => {
    return data + (5 / 100) * data.toFixed(4);
  };

  const sell = (data) => {
    return data - (5 / 100) * data.toFixed(4);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, id) => (
            <tr key={id}>
              <td>{value.name}</td>
              <td>{Number(buy(value.rate)).toFixed(4)}</td>
              <td>{Number(value.rate).toFixed(4)}</td>
              <td>{Number(sell(value.rate)).toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Currency;

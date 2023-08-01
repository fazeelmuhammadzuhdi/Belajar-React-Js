// import Footer from "./Page/Footer";
// import Header from "./Page/Header";
// import MenuKontak from "./Page/MenuKontak";
// import MenuMakanan from "./Page/MenuMakanan";
// import MenuTentangKami from "./Page/MenuTentangKami";
// import MenuUtama from "./Page/MenuUtama";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoriteColor from "./Pages/FavoriteColor";
import Timers from "./Pages/Count";
import Counter from "./Pages/Counter";
import MyForm from "./Pages/Form";
// const phoneData = [
//   { name: "IPHONE 11", price: 1300000, discount: 10 },
//   { name: "IPHONE 12", price: 1400000, discount: 40 },
//   { name: "IPHONE 13", price: 1500000, discount: 50 },
// ];

// function Product({ price, name, discount = 0 }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>
//         <s>Rp {price}</s> ({discount}%)
//       </p>
//       <b>Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}</b>
//     </div>
//   );
// }

// function Football() {
//   const shoot = (value, e) => {
//     e.preventDefault();
//     alert(value);
//   };

//   return (
//     <button onClick={(e) => shoot("GOAL MESSI, MESSI", e)}>Click Me!</button>
//   );
// }

// function MissedGoal() {
//   return <h1>TIDAK GOL</h1>;
// }

// function MadeGoal() {
//   return <h1>GOAL SIUU</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;

//   return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
// }

// function ListItemCar(props) {
//   return <li>Saya Mempunyai Mobil {props.brand}</li>;
// }

// function Garage() {
//   const cars = [
//     { id: 1, brand: "FERRARI" },
//     { id: 2, brand: "AUDIT" },
//     { id: 3, brand: "BMW" },
//     { id: 4, brand: "AVANZA" },
//     { id: 5, brand: "TOYOTA" },
//   ];

//   const myStyle = {
//     color: "red",
//     backgroundColor: "black",
//     padding: "10px",
//     fontFamily: "Sans-serif",
//   };

//   return (
//     <>
//       <h1 style={myStyle}>Daftar Mobil Yang Saya Punya</h1>
//       <ul>
//         {cars.map((car) => (
//           <ListItemCar key={car.id} brand={car.brand} />
//         ))}
//       </ul>
//     </>
//   );
// }

// const cars = ["BMW", "FERRARI", "AUDIT", "MAZDA"];

// function Garage(props) {
//   const cars = props.cars;

//   return (
//     <>
//       {cars.length > 0 && (
//         <h2>
//           Kamu Mempunyai {cars.length} Mobil Di Garasi Yaitu {cars[0]} {cars[1]}{" "}
//           {cars[3]}
//         </h2>
//       )}
//     </>
//   );
// }

// const cars = [];

// function App() {
//   return (
//     <div>
//       <Football />
//       <Goal isGoal={true} />
//       <Garage />
//       <Garage cars={cars} />
//       {phoneData.map((phone, id) => (
//         <Product
//           key={id}
//           name={phone.name}
//           price={phone.price}
//           discount={phone.discount}
//         ></Product>
//       ))}

//       <Header />
//       <MenuUtama />
//       <MenuMakanan />
//       <MenuTentangKami />
//       <MenuKontak />
//       <Footer />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <MyForm />
      {/* <Counter /> */}
      {/* <Timers /> */}
      {/* <FavoriteColor /> */}
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;

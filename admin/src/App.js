import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import Login from "./Login/Login";
import "./App.css";
import Header from "./Header/Header";
import Dashboard from "./dashboard/dashboard";
import Product from "./Product/Product";
import Customer from "./customer/customer";
import NewProduct from "./NewProduct/NewProduct";
import EditProduct from "./EditProduct/EditProduct";

function App() {
  // const userId = JSON.parse(localStorage.getItem("userId"));
  // const role = JSON.parse(localStorage.getItem("role"));
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
          </Routes>
        </Dashboard>
      </BrowserRouter>
    </div>
  );
  // if (!userId) {
  //   return (
  //     <div className="App">
  //       <BrowserRouter>
  //         <Routes>
  //           <Route index element={<Login />} />
  //         </Routes>
  //       </BrowserRouter>
  //     </div>
  //   );
  // } else {
  //   if (role === "admin") {
  //     return (
  //       <div className="App">
  //         <BrowserRouter>
  //           <Routes>
  //             <Route index element={<Home />} />
  //             <Route path="/products" element={<Products />} />
  //             <Route path="/chat" element={<Chat />} />
  //             <Route path="/newproduct" element={<NewHotel />} />
  //           </Routes>
  //         </BrowserRouter>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="App">
  //         <BrowserRouter>
  //           <Routes>
  //             <Route index element={<Chat />} />
  //           </Routes>
  //         </BrowserRouter>
  //       </div>
  //     );
  //   }
  // }
}

export default App;

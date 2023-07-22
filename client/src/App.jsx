import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BajajApp from "./pages/Bajaj-App";
// import Product from "./pages/Product";
import ProductDetails from "./components/app/ProductDetails";
import ProductDetails2 from "./components/app/user/ProductDetails2";
import ProductDetailsR from "./components/app/ProductDetailsR";
import User2 from "./pages/User2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/app/*" element={<BajajApp />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/details2/:id" element={<ProductDetails2 />} />
        <Route path="/recommended/:id" element={<ProductDetailsR />} />
        <Route path="/recommended2/:id" element={<ProductDetailsR />} />
        <Route path="/app/user2" element={<User2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

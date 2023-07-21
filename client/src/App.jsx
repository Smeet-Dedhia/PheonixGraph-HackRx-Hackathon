import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BajajApp from "./pages/Bajaj-App";
// import Product from "./pages/Product";
import ProductDetails from "./components/app/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/app/*" element={<BajajApp />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/details/:id" element={<ProductDetails />} />
        {/* <Routes path="/app/:id" element={<ProductDetails />} /> */}
        {/* <Routes path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

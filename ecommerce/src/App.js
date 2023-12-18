import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/organisms/header/header";
import FooterComponent from "./components/organisms/footer/footer";
import AdminRoute from "./routes/admin-route";
import ClientRoute from "./routes/client-route";
import Products from "./pages/site-customer/products/products";
import ProductDetail from "./pages/site-customer/products/product-detail";
import RouterComponent from "./routes/Router-Component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterComponent />

        {/* <HeaderComponent />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
        // <FooterComponent /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomeComponents from "./components/pages/home/HomeComponents";
import AboutComponents from "./components/pages/about/AboutComponents";
import ProductComponents from "./components/pages/product/ProductComponents";
import ContactComponents from "./components/pages/contact/ContactComponents";
import ServiceComponents from "./components/pages/service/ServiceComponents";
import Header from "./components/layouts/header/Header";
import TopHeader from "./components/layouts/header/TopHeader";
import Footer from "./components/layouts/footer/Footer";
import FaqComponents from "./components/pages/faq/FaqComponents";


function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponents />} />
          <Route path="/about" element={<AboutComponents />} />
          <Route path="/services" element={<ServiceComponents />} />
          <Route path="/contact" element={<ContactComponents />} />
          <Route path="/product" element={<ProductComponents />} />
          <Route path="/faq" element={<FaqComponents />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

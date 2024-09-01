import "./App.css";
import Header from "./Components/Header.jsx";
import { ImageSlider } from "./Components/Imageslider.jsx";
import FrontPage from "./Components/FrontPage.jsx";
import Products from "./Components/Products.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <FrontPage />
      <Products />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Header from "./Components/Header.jsx";
import { ImageSlider } from "./Components/Imageslider.jsx";
import Products from "./Components/Products.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <ImageSlider />
      <Products />
      <Footer />
    </>
  );
}

export default App;

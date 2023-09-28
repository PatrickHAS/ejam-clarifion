import ListUsps from "./components/list-usps";
import Header from "./components/header";
import TitlePage from "./components/title-page";
import StatusCart from "./components/status-cart";
import ContainerProduct from "./components/container-product";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ListUsps />
      <Header />
      <TitlePage />
      <StatusCart />
      <ContainerProduct />
      <Footer />
    </div>
  );
}

export default App;

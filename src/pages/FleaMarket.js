import Header from "../../components/layout/Header";
import MarketBody from "../components/MarketBody";
import Footer from "../../components/layout/Footer";
import { useContext } from "react";
import { deviceContext } from "../App";

export function FleaMarket() {
  const device = useContext(deviceContext);

  return (
    <>
      <Header />
      <MarketBody />
      <Footer />
    </>
  );
}

export default FleaMarket;

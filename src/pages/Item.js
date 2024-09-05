import Header from "../../components/layout/Header";
import ItemBody from "../components/ItemBody";
import Footer from "../../components/layout/Footer";
import { useContext } from "react";
import { deviceContext } from "../App";

export function Registration() {
  const device = useContext(deviceContext);

  return (
    <>
      <Header />
      <ItemBody />
      <Footer />
    </>
  );
}

export default Registration;

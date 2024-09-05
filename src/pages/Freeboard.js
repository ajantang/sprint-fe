import Header from "../../components/layout/Header";
import FreeboardBody from "../components/FreeboardBody";
import Footer from "../../components/layout/Footer";
import { useContext } from "react";
import { deviceContext } from "../App";

export function Freeboard() {
  const device = useContext(deviceContext);

  return (
    <>
      <Header />
      <FreeboardBody />
      <Footer />
    </>
  );
}

export default Freeboard;

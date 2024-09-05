import Header from "../../components/layout/Header";
import RegistrationBody from "../components/RegistrationBody";
import Footer from "../../components/layout/Footer";
import { useContext } from "react";
import { deviceContext } from "../App";

export function Registration() {
  const device = useContext(deviceContext);

  return (
    <>
      <Header />
      <RegistrationBody />
      <Footer />
    </>
  );
}

export default Registration;

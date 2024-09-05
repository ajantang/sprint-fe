import Header from "@/components/layout/Header";
import HomeBody from "@/components/home/Homebody";
import Footer from "@/components/layout/Footer";
import { useContext } from "react";
import { deviceContext } from "@/pages/_app";

export function Registration() {
  const device = useContext(deviceContext);

  return (
    <>
      <Header />
      <HomeBody />
      <Footer />
    </>
  );
}

export default Registration;

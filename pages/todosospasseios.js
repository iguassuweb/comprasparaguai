import Head from "next/head";
import { useState, useEffect } from "react";
import { BodyContainer, Header, Footer } from "../src/components/layout";
import { getTours } from "../src/api/webservice";
import { TourList } from "../src/components/patterns/Passeios/TourList";

export default function TodosOsPasseios() {
  const [passeios, setPasseios] = useState();
  useEffect(() => {
    carregarPasseios();
  }, []);

  const carregarPasseios = async () => {
    const res = await getTours();
    setPasseios(res);
    console.log(res);
    console.log(res[0].vlVenda);
  };

  return (
    <BodyContainer>
      <Head />
      <Header />
      <TourList passeios={passeios} />
      <Footer />
    </BodyContainer>
  );
}

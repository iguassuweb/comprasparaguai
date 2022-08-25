import Head from "next/head";
import {
  BodyContainer,
  Header,
  Footer,
} from "../src/components/layout";
import {Text} from "../src/components/core"

export default function Transportes(props) {
  return (
    <BodyContainer>
      <Head />
      <Header/>
      <Text variant='h1'> Transportes </Text>
      <Footer />
    </BodyContainer>
  );
}
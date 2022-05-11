import Tesla from '../../assets/tesla.png';
import { Body, Heading } from "../../components/Text";
import { Container, Header, Image, TextContainer } from "./styles";


function Home() {

  return (
    <Container>
      <Header>
        {/* <Menu /> */}
        <TextContainer>
          <Heading size="md">Modern Way to Travel with Eletric Car Rent in Your Device!</Heading>
          <Body size="md">Rent an eletric car for your travel needs wherever and whenever you want with your device!</Body>
        </TextContainer>
        <Image src={Tesla} alt="Tesla Model S" />
      </Header>
    </Container>
  )
}

export default Home;

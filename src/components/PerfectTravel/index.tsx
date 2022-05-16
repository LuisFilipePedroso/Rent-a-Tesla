import Tesla from '../../assets/tesla_with_background.jpeg';
import Button from '../Button';
import { Body, Title } from "../Text";
import { Container, Image, TextContainer } from './styles';


function PerfectTravel() {
  return (
    <Container>
      <Image src={Tesla} alt="Tesla Model S" />

      <TextContainer>
        <Title size="sm">Your Perfect Travel Companion!</Title>
        <Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Body>

        <Button css={{ marginTop: "2rem", width: "180px" }}>Learn More</Button>
      </TextContainer>
    </Container>
  )
}

export default PerfectTravel;
import AndroidLogo from '../../assets/android.png';
import AppleLogo from '../../assets/apple.svg';
import Tesla from '../../assets/tesla.png';
import { Body, Heading } from "../../components/Text";
import { Container, Content, Header, Image, SocialButton, SocialButtonsContainer, TextContainer } from "./styles";

function Home() {

  return (
    <Container>
      <Header>
        <Content>
          <TextContainer>
            <Heading size="md">Modern Way to Travel with Eletric Car Rent in Your Device!</Heading>
            <Body size="md">Rent an eletric car for your travel needs wherever and whenever you want with your device!</Body>
          </TextContainer>
          <Image src={Tesla} alt="Tesla Model S" size="lg" css={{ position: 'absolute', right: 0 }} />
        </Content>
        {/* <Menu /> */}
        <Content>
          <SocialButtonsContainer>
            <SocialButton color="light">
              <Image src={AppleLogo} alt="Apple Logo" size="sm" />

              <div>
                <span>Download on the</span>
                <p>App Store</p>
              </div>
            </SocialButton>

            <SocialButton color="dark">
              <Image src={AndroidLogo} alt="Android Logo" size="sm" />

              <div>
                <span>GET IT ON</span>
                <p>Google Play</p>
              </div>
            </SocialButton>
          </SocialButtonsContainer>
        </Content>
      </Header>
    </Container>
  )
}

export default Home;

import AndroidLogo from '../../assets/android.png';
import AppleLogo from '../../assets/apple.svg';
import Tesla from '../../assets/tesla.png';
import { Body, Heading } from "../Text";
import { Container, Content, Image, SocialButton, SocialButtonsContainer, TextContainer } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Heading size="md">Modern Way to Travel with Eletric Car Rent in Your Device!</Heading>
          <Body size="md">Rent an eletric car for your travel needs wherever and whenever you want with your device!</Body>
        </TextContainer>
        <Image src={Tesla} alt="Tesla Model S" size="lg" css={{ position: 'absolute', right: 0 }} />
      </Content>
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
    </Container>
  )
}

export default Header;
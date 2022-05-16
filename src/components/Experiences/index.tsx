
import Content from "../Content";
import { Body, Title } from "../Text";
import { AiFillCar, Benefit, BenefitsContainer, Container, GasPumpIcon, HappyUserIcon, IconContainer, TiTree } from "./styles";

function Experiences() {
  return (
    <Container>
      <Content css={{ flexDirection: "column" }}>
        <Title size="md" css={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>Feel the Best Experience with Our Rental Deals!</Title>

        <BenefitsContainer>
          <Benefit>
            <IconContainer>
              <TiTree size={40} />
            </IconContainer>
            <Body css={{ color: "$gray600", fontWeight: "500" }}>Eco-Friendly</Body>
            <Body variant="body2" css={{ textAlign: "center" }}>It's time to change! Contribute to the environment with us by moving
              to eletric-carbon free vehicle!
            </Body>
          </Benefit>
          <Benefit>
            <IconContainer>
              <AiFillCar size={40} />
            </IconContainer>
            <Body css={{ color: "$gray600", fontWeight: "500" }}>Well-Maintained Car</Body>
            <Body variant="body2" css={{ textAlign: "center" }}>Our vehicle will always maintained by us,
              we always prioritize in your comfort and safety!
            </Body>
          </Benefit>
          <Benefit>
            <IconContainer>
              <GasPumpIcon size={40} />
            </IconContainer>
            <Body css={{ color: "$gray600", fontWeight: "500" }}>Plenty of Stations</Body>
            <Body variant="body2" css={{ textAlign: "center" }}>Worrying about your vehicle baterry life? Don't worry,
              we already have stations scattered in place!
            </Body>
          </Benefit>
          <Benefit>
            <IconContainer>
              <HappyUserIcon size={40} />
            </IconContainer>
            <Body css={{ color: "$gray600", fontWeight: "500" }}>Easy to Use</Body>
            <Body variant="body2" css={{ textAlign: "center" }}>Grab your phone, search for location, pick up your vehicle,
              track your usage, and enjoy your journey!
            </Body>
          </Benefit>
        </BenefitsContainer>
      </Content>
    </Container>
  )
}

export default Experiences;
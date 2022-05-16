import Experiences from "../../components/Experiences";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import PerfectTravel from "../../components/PerfectTravel";
import { Container } from "./styles";

function Home() {

  return (
    <Container>
      <Menu />
      <Header />
      <Experiences />
      <PerfectTravel />
    </Container>
  )
}

export default Home;

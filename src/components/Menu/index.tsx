import Button from "../Button";
import { Container, List, ListItem, Logo, Nav } from "./styles";

function Menu() {
  return (
    <Container>
      <Logo>Reent a Tesla</Logo>

      <Nav>
        <List>
          <ListItem selected>
            <a>Home</a>
          </ListItem>
          <ListItem>
            <a>Products</a>
          </ListItem>
          <ListItem>
            <a>Partner with us</a>
          </ListItem>
          <ListItem>
            <a>Careers</a>
          </ListItem>
          <ListItem>
            <a>About</a>
          </ListItem>
          <ListItem>
            <a>Help</a>
          </ListItem>
          <Button variant="secondary">Download App</Button>
        </List>
      </Nav>
    </Container>
  )
}

export default Menu;
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import reatLogo from "../img/F1_22_game_logo.svg.png";
const Header = () => {
  return (
    <Container>
      <Image fluid src={reatLogo} width="350px"></Image>
    </Container>
  );
};

export default Header;

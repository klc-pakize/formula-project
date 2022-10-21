import Card from "./card/Card";
import Header from "./header/Header";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="text-center mt-4 p-5">
      <Header />
      <Card />
    </Container>
  );
}

export default App;

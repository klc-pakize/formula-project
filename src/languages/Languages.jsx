import { useState } from "react";
import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/esm/Container";

const Languages = ({ name, img, options }) => {
  const [cards, setCards] = useState(false);

  const handleClick = (e) => {
    setCards(!cards);
  };

  return (
    <Container
      onClick={handleClick}
      className="p-4 rounded-3 h-100 lang-card"
      type="button"
    >
      {!cards && (
        <Container>
          <Image
            className="lang-logo  rounded-3 "
            src={img}
            width="100%"
          ></Image>
          <h5 className="person m-1">{name}</h5>
        </Container>
      )}

      {cards && (
        <ul className="h-100 d-flex flex-column justift-content-center">
          {options.map((item) => {
            return <li className="text-start">{item}</li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Languages;

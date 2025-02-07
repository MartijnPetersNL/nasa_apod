import { InfoCircleFill } from "react-bootstrap-icons";
//Bootstrap 5 grid systeem
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Footer(props) {
  const { showModal, handleDisplayModal, data } = props;
  return (
    <Container>
      <footer>
        <Row>
          <Col>
            <h2>Copyright: {data?.copyright}</h2>
            <p className="desciptionTitle"> Beschrijving</p>
            <p>
              {" "}
              Data komt van NASA open API klik op het info icoon voor
              uitgebreide informatie
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="terugknop" onClick={handleDisplayModal}>
              <InfoCircleFill />
            </button>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

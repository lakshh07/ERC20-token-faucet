import "./App.css";
import FCTToken from "./artifacts/contracts/FCTTokens.sol/FCTToken.json";
import Faucet from "./components/Faucet";
import TokenSend from "./components/TokenSend";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const Token = FCTToken;

  return (
    <div className="App">
      <Container>
        <h6 className="md-12">Only Compatible With Ropsten Test Network</h6>
        <Row className="justify-content-md-center">
          <Col>
            <div>
              <Faucet tokenContract={Token} />
            </div>
          </Col>
          <Col>
            <div>
              <TokenSend tokenContract={Token} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

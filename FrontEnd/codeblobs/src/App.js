import React from "react";
import { Container, Row } from "react-grid-system";

import Groups from "./views/Groups";

function App() {
  return (
    <Container fluid>
      <Row>
        <Groups />
      </Row>
    </Container>
  );
}

export default App;

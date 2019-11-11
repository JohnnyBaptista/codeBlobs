import React from "react";
import { Container, Row } from "react-grid-system";

import Groups from "./views/Groups/Groups";

function App() {
  return (
    <Container fluid>
      <h1 style={{ textAlign: "center", fontFamily: "Monda" }}>Grupos</h1>
      <Row>
        <Groups />
      </Row>
    </Container>
  );
}

export default App;

import React from "react";
import { Container, Row } from "react-grid-system";

import AppRoutes from './app.routes';

function App() {
  return (
    <Container fluid>
      <h1 style={{ textAlign: "center", fontFamily: "Monda" }}>Codeblobs</h1>

      <Row>
        <AppRoutes/>
      </Row>
    </Container>
  );
}

export default App;

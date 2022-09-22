import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Contador = (props) => {
  return (
    <Button variant="primary">
      <Badge bg="secondary">1/{props.todasLasTareas.length}</Badge>
    </Button>
  );
};

export default Contador;
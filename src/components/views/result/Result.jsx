import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CardItem } from "./CardItem";
import { ProductContext } from "../../../context/ProductContext";
import "./Result.scss";

export const Result = () => {
  const { allData } = useContext(ProductContext);

  return (
    <Container className="mb-body-result" fluid>
      <Row>
        <Col
          lg={{ span: 8, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          sm={{ span: 10, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
        >
          <span className="breadcrumb">
            {allData?.categories.toString().replaceAll(",", " > ")}
          </span>
        </Col>
        <Col
          lg={{ span: 2, offset: 0 }}
          md={{ span: 2, offset: 0 }}
          sm={{ span: 1, offset: 0 }}
          xs={{ span: 1, offset: 0 }}
        ></Col>
      </Row>
      <Row>
        <Col
          lg={{ span: 8, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          sm={{ span: 10, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
        >
          {allData?.items?.map((item, idx) => (
            <CardItem key={item.id} data={item} />
          ))}
        </Col>
        <Col
          lg={{ span: 2, offset: 0 }}
          md={{ span: 2, offset: 0 }}
          sm={{ span: 1, offset: 0 }}
          xs={{ span: 1, offset: 0 }}
        ></Col>
      </Row>
    </Container>
  );
};

import React from "react";
import { Container, Col, Row, Stack, Image, Button } from "react-bootstrap";
import "./Detail.scss";

export const DetailItem = ({ data }) => {
  return (
    <Container className="mb-body-detail-item" fluid>
      <Row>
        <Col>
          <Stack direction="horizontal" style={{ alignItems: "normal" }}>
            <Container className="detail1" fluid>
              <Row>
                <Col>
                  <Image
                    className="rounded mx-auto d-block"
                    src={data.item.picture}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack direction="vertical">
                    <span className="descripcionTitle">
                      Descripción del producto
                    </span>
                    <span className="descripcion">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, ipsam dignissimos? Quibusdam expedita
                      molestias laboriosam quaerat veniam a nemo, quisquam
                      itaque aspernatur quo cum porro qui consequatur eos
                      voluptas inventore.
                    </span>
                  </Stack>
                </Col>
              </Row>
            </Container>
            <Container className="detail2 d-block" fluid>
              <Row>
                <Col>
                  <Stack direction="vertical">
                    <span className="condition">{`${
                      data.item.condition == "new" ? "Nuevo" : "Usado"
                    } - ${data.item.sold_quantity} vendidos`}</span>
                    <span className="title">{data.item.title}</span>
                    <Stack direction="horizontal">
                      <span className="price">{`${data.item.price.currency} ${data.item.price.value}`}</span>
                      <span className="decimal">
                        {data.item.price.decimals}
                      </span>
                    </Stack>
                    <Button className="btnComprar" variant="primary">
                      Comprar
                    </Button>
                  </Stack>
                </Col>
              </Row>
            </Container>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

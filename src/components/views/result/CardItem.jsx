import React, { useCallback } from "react";
import { Card as BSCard, Col, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../helpers/constants";
import "./Result.scss";

export const CardItem = ({ data }) => {
  let navigate = useNavigate();

  const handleDetail = useCallback(async (event) => {
    event.preventDefault();

    navigate(PATH.DETAILR.replace("{id}", data.id), { replace: false });
  });

  return (
    <BSCard className="mb-card">
      <BSCard.Body>
        <Row className="card-body-row">
          <Col lg={8} md={9} sm={9} xs={9}>
            <Stack direction="horizontal">
              <BSCard.Img
                onClick={handleDetail}
                className="card-img-sale"
                src={data.picture}
              ></BSCard.Img>
              <Stack direction="vertical">
                <Stack direction="horizontal" className="card-text-price">
                  <BSCard.Text>{`${data.price.currency} ${data.price.value}`}</BSCard.Text>
                  {data.free_shipping && (
                    <BSCard.Img
                      className="card-img-shipping"
                      src="./ic_shipping.png"
                    ></BSCard.Img>
                  )}
                </Stack>
                <BSCard.Text onClick={handleDetail} className="card-text-name">
                  {data.title}
                </BSCard.Text>
              </Stack>
            </Stack>
          </Col>
          <Col lg={4} md={3} sm={3} xs={3}>
            <BSCard.Text className="card-text-state">
              {data.state_name}
            </BSCard.Text>
          </Col>
        </Row>
      </BSCard.Body>
    </BSCard>
  );
};

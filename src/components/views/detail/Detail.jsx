import React, { useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { ProductContext } from "../../../context/ProductContext";
import { Loading } from "../../ui/loading";
import { DetailItem } from "./DetailItem";
import "./Detail.scss";
import { useSEO } from "../../../hooks/useSEO";

export const Detail = () => {
  const { loading, detail, handleGetOneProduct } = useContext(ProductContext);
  const { id } = useParams();

  useSEO({ title: "Detail", description: "Detail of Detail." });

  useEffect(() => {
    handleGetOneProduct(id);
  }, [id]);

  const getBreadcrumb = useMemo(() => {
    if (detail != null) {
      return <span className="breadcrumb">{detail?.item.category}</span>;
    }
  }, [detail]);

  const getDetailItem = useMemo(() => {
    if (detail != null) {
      return <DetailItem data={detail} />;
    }
  }, [detail]);

  return (
    <>
      <Container className="mb-body-detail" fluid>
        <Row>
          <Col
            lg={{ span: 8, offset: 2 }}
            md={{ span: 8, offset: 2 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
          >
            {getBreadcrumb}
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
            {getDetailItem}
          </Col>
          <Col
            lg={{ span: 2, offset: 0 }}
            md={{ span: 2, offset: 0 }}
            sm={{ span: 1, offset: 0 }}
            xs={{ span: 1, offset: 0 }}
          ></Col>
        </Row>
      </Container>
      <Loading show={loading} />
    </>
  );
};

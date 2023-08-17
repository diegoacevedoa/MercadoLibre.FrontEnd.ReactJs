import React, { useContext, useEffect, useMemo } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CardItem } from "./CardItem";
import { ProductContext } from "../../../context/ProductContext";
import "./Result.scss";
import { Loading } from "../../ui/loading";
import { useSearchParams } from "react-router-dom";
import { useSEO } from "../../../hooks/useSEO";

export const Result = () => {
  const [queryParameters] = useSearchParams();
  const { loading, allData, handleGetAllProducts } = useContext(ProductContext);
  const searchParameter = queryParameters.get("search");

  useSEO({ title: "Result", description: "Detail of Result." });

  useEffect(() => {
    if (searchParameter != undefined && searchParameter != "") {
      handleGetAllProducts(searchParameter);
    }
  }, [searchParameter]);

  const getResults = useMemo(() => {
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
  }, [allData]);

  return (
    <>
      {getResults}
      <Loading show={loading} />
    </>
  );
};

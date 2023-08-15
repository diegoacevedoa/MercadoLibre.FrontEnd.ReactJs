import { useCallback, useContext, useEffect } from "react";
import { useForm } from "../../../hooks/useForm";
import { Container, Form, Col, Row, Stack, Image } from "react-bootstrap";
import { Loading } from "../../ui/loading";
import { ProductContext } from "../../../context/ProductContext";
import InputButton from "../../ui/input-button";
import { PATH } from "../../../helpers/constants";
import { useNavigate } from "react-router-dom";
import "./Search.scss";

const defaultFormValues = {
  search: "",
};

const defaultValidationValues = {
  search: { invalid: false, message: "" },
};

const validationMessages = {
  search: "El criterio de búsqueda es requerido.",
};

export const Search = () => {
  const { loading, allData, handleGetAllProducts } = useContext(ProductContext);
  let navigate = useNavigate();

  const [
    formValues,
    validationValues,
    valid,
    handleInputChange,
    triggerValidation,
    reset,
  ] = useForm(
    defaultFormValues,
    defaultValidationValues,
    validationMessages,
    false
  );

  useEffect(() => {
    if (allData && allData.items && allData.items.length > 0) {
      navigate(PATH.RESULT, { replace: true });
    }
  }, [allData]);

  const handleSearch = useCallback(async (event) => {
    event.preventDefault();

    triggerValidation();

    if (!valid || formValues.search === "") {
      return;
    }

    handleGetAllProducts(formValues.search);
  });

  return (
    <>
      <Container className="mb-body-search" fluid>
        <Form id="formSearch" onSubmit={handleSearch} noValidate>
          <Row>
            <Col
              lg={{ span: 8, offset: 2 }}
              md={{ span: 8, offset: 2 }}
              sm={{ span: 8, offset: 2 }}
              xs={{ span: 10, offset: 1 }}
            >
              <Stack direction="horizontal">
                <Image
                  src="/mercadolibre.svg"
                  className="mb-img-mercado"
                  width={53}
                  height={36}
                />
                <InputButton
                  id="search"
                  className="mb-input-button"
                  onChange={handleInputChange}
                  placeHolder="Nunca dejes de buscar"
                  type="submit"
                  form="formSearch"
                  value={formValues.search}
                  disabled={loading}
                  required
                  error={validationValues.search.message}
                  isInvalid={validationValues.search.invalid}
                  index={1}
                />
              </Stack>
            </Col>
            <Col
              lg={{ span: 2, offset: 0 }}
              md={{ span: 2, offset: 0 }}
              sm={{ span: 2, offset: 0 }}
              xs={{ span: 1, offset: 0 }}
            ></Col>
          </Row>
        </Form>
      </Container>
      <Loading show={loading} />
    </>
  );
};

import { useCallback, useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { Container, Form, Col, Row, Stack, Image } from "react-bootstrap";
import { Loading } from "../ui/loading";
import { ProductContext } from "../../context/ProductContext";
import InputButton from "../ui/input-button";

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
  const { loading, handleGetAllProducts } = useContext(ProductContext);

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
    true
  );

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
      <Container className="p-0" fluid>
        <Form id="formSearch" onSubmit={handleSearch} noValidate>
          <Row>
            <Col
              lg={{ span: 10, offset: 2 }}
              md={{ span: 10, offset: 2 }}
              sm={{ span: 10, offset: 2 }}
              xs={{ span: 10, offset: 2 }}
            >
              <Stack direction="horizontal" className="float-start">
                <Image src="/mercadolibre.svg" width={53} height={36} />
                <InputButton
                  className="mb-table-filter-input"
                  onChange={handleInputChange}
                  placeHolder="Nunca dejes de buscar"
                  type="submit"
                  form="formSearch"
                  value={formValues.search}
                  index={1}
                />
              </Stack>
            </Col>
          </Row>
        </Form>
      </Container>
      <Loading show={loading} />
    </>
  );
};

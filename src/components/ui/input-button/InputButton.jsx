import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Search } from "react-bootstrap-icons";
import { InputGroup, Button, FormControl, Form } from "react-bootstrap";

import "./InputButton.scss";

const InputButton = ({
  id,
  onClick,
  onChange,
  value,
  text,
  placeHolder,
  icon,
  className,
  type = "submit",
  form = "",
  error,
  required = false,
  disabled = false,
  isInvalid,
  index = 0,
}) => {
  const handleOnChange = useCallback((event) => {
    onChange({ value: event.target.value, id, event });
  });

  const searchIcon = useMemo(() => {
    if (value !== "" && icon) {
      return icon;
    }

    return <Search size={18} />;
  }, [icon, value]);

  return (
    <InputGroup className={`mb-input-button ${className}`}>
      <FormControl
        aria-describedby="button-addon"
        aria-label={placeHolder}
        autoCorrect="off"
        autoComplete="off"
        className="mb-input-control"
        id={id}
        onChange={handleOnChange}
        placeholder={placeHolder}
        type="text"
        value={value}
        disabled={disabled}
        isInvalid={isInvalid}
        required={required}
      />
      <Button
        className="mb-input-btn"
        id="buttonAddon"
        type={type}
        onClick={onClick}
        form={form}
        // disabled={disabled}
      >
        {searchIcon} {text}
      </Button>
      <Form.Control.Feedback tabIndex={index} type="invalid">
        {error}
      </Form.Control.Feedback>
    </InputGroup>
  );
};

InputButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  text: PropTypes.string,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.string,
  form: PropTypes.string,
};

export default InputButton;

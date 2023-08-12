import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Search } from "react-bootstrap-icons";
import { InputGroup, Button, FormControl } from "react-bootstrap";

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
}) => {
  const handleOnChange = useCallback((event) => {
    onChange(event.target.value);
  });

  const searchIcon = useMemo(() => {
    if (value !== "") {
      return icon;
    }

    return <Search size={18} />;
  }, [icon, value]);

  return (
    <InputGroup className={`mb-input-button ${className}`}>
      <FormControl
        aria-describedby="button-addon"
        aria-label={placeHolder}
        className="mb-input-control"
        id={id}
        onChange={handleOnChange}
        placeholder={placeHolder}
        type="text"
        value={value}
      />
      <Button
        className="mb-input-btn"
        id="buttonAddon"
        type={type}
        onClick={onClick}
        form={form}
      >
        {searchIcon} {text}
      </Button>
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

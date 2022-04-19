import PropTypes from "prop-types";

let Input = function (props) {
  return (
    <div data-test="component-input">
      <input type="text" />
    </div>
  );
};

Input.propTpes = {
  secretWord: PropTypes.bool,
};

export default Input;

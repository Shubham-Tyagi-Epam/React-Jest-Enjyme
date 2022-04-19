import PropTypes from "prop-types";
import React, { useState } from "react";

let Input = function (props) {
  const [guessWord, setGuessWord] = useState("");
  if (props.success == false) {
    return (
      <div data-test="component-input" className="my-4">
        <form className="w-75 mx-auto">
          <div className="form-group row">
            <input
              type="text"
              className="form-control col"
              data-test="input-box"
              value={guessWord}
              onChange={(event) => {
                setGuessWord(event.target.value);
              }}
              id="gsWord"
            />
            <button
              className="btn btn-primary ms-4 col-auto"
              type="submit"
              data-test="submit-btn"
              onClick={(event) => {
                event.preventDefault();
                setGuessWord("");
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return <div data-test="component-input" />;
  }
};

Input.propTypes = {
  success: PropTypes.bool,
  secretWord: PropTypes.string,
};

export default Input;

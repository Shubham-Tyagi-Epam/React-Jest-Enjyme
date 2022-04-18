import PropTypes from "prop-types";

/**
 * Functional react component for congratualatory message.
 * @function
 * @param {object} - React Props
 * @returns {JSX.Element} - Rendered component (or null if success prop is false)
 */
let Congrats = function ({ success }) {
  if (success == true) {
    return (
      <div data-test="component-congrats">
        <div data-test="congrats-message">
          Congrats! you guessed the correct word!
        </div>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

// Congrats.propTypes = {
//   success: PropTypes.bool.isRequired,
// };

export default Congrats;

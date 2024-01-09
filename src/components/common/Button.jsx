import PropTypes from "prop-types";

/**
 * @param {object} props
 * @param {React.JSX} props.children
 * @param {boolean} props.pill
 * @param {string} props.type
 * @returns {React.JSX}
 */
function Button({ children, pill = false, type = "button" }) {
  return (
    <button type={type} className={pill ? "btn-pill" : "btn"}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  pill: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;

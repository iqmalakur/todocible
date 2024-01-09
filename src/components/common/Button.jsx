import PropTypes from "prop-types";

/**
 * @param {object} props
 * @param {string} props.children
 * @param {boolean} props.pill
 * @param {string} props.type
 * @param {string} props.align
 * @returns {React.JSX}
 */
function Button({ children, pill = false, type = "button", align = "start" }) {
  let margin = "mr-auto";

  switch (align) {
    case "center":
      margin = "mx-auto";
      break;
    case "right":
      margin = "ms-auto";
      break;
  }

  return (
    <button type={type} className={`${pill ? "btn-pill" : "btn"} ${margin}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  pill: PropTypes.bool,
  type: PropTypes.string,
  align: PropTypes.string,
};

export default Button;

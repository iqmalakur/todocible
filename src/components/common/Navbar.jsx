import PropTypes from "prop-types";
import Button from "./Button";

/**
 * @param {object} props
 * @param {boolean} props.withButton
 * @returns {React.JSX}
 */
function Navbar({ withButton }) {
  return (
    <nav className="py-5 px-5 lg:px-20 flex justify-between">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="logo"
          className="w-14 sm:w-16 md:w-auto inline-block mr-3"
        />
        <h2 className="inline-block text-white text:xl sm:text-xl md:text-2xl font-bold">
          ToDocible
        </h2>
      </div>
      {withButton && (
        <div className="flex items-center">
          <Button pill={true}>Login</Button>
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  withButton: PropTypes.bool,
};

export default Navbar;

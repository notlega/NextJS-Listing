import PropTypes from 'prop-types';

const Button = ({ children, className, onClickFunction }) => (
  <button className={`bg-primary hover:bg-primary-focus text-white font-bold h-12 min-h-[3rem] px-4 rounded ${className}`} onClick={onClickFunction}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClickFunction: PropTypes.func,
};

export default Button;

import PropTypes from 'prop-types';

const CustomButton = ({ color, content }) => {
  return (
    <button
      type="button"
      className={`btn btn-sm me-2 ${color === 'yellow' ? 'btn-primary' : 'btn-secondary'}`}
      style={{ backgroundColor: color }}
    >
      {content}
    </button>
  );
};

CustomButton.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CustomButton;

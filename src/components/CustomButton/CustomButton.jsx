import PropTypes from 'prop-types';

const CustomButton = ({ color, content }) => {
  const buttonStyle = {
    backgroundColor: color,
    borderColor: color, // Set border color to match background color
    color: color === '#FEFEFE' ? '#000' : '#FFF', // Adjust text color based on background color
  };

  return (
    <button
      type="button"
      className="btn btn-sm me-2"
      style={buttonStyle}
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

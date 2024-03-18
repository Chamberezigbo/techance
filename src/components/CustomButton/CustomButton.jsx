import PropTypes from "prop-types";

const CustomButton = ({ color, content,style }) => {
  const buttonStyle = {
    backgroundColor: color,
    borderColor: color, // Set border color to match background color
    color: color === "#FEFEFE" ? "#000" : "#FFF", 
  };

  const mergedStyle = { ...buttonStyle, ...style };

  return (
    <button type="button" className="btn btn-sm me-2" style={{ ...mergedStyle, borderRadius: '10px' }}>
      {content}
    </button>
  );
};

CustomButton.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default CustomButton;

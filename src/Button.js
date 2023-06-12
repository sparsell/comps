import PropTypes from 'prop-types';

function Button({ 
    children, 
    primary, 
    secondary, 
    success, 
    warning, 
    danger, 
    outline, 
    rounded
 }) {

   Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool
   } 
 
    return <button>{children}</button>
}

export default Button;
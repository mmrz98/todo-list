import PropTypes from 'prop-types';

const Button = ({ color, label, onClick }) => {
    return <button 
    style={{backgroundColor: color}} 
    className="btn"
    onClick={onClick}>{label}</button>
}

Button.defaultProps = {
    color: '#02d66c'
}

Button.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;
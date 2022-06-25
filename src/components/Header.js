import PropTypes from 'prop-types';
import Button from './Button';
import {useLocation} from 'react-router-dom';

const Header = ({ title, onToggle, buttonLabel, buttonColor }) => {
    const location = useLocation();
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' &&  <Button color={buttonColor} label={buttonLabel} onClick={onToggle} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'لیست تسک ها'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = ({task, onDelete, switchReminder}) => {
    return(
        <div 
        className={`task ${task.reminder ? 'reminder' : ''}`} 
        onDoubleClick={() => switchReminder(task.id)}>
            <h4>{task.text} <FaTimes 
            style={{
                color: 'red', cursor: 'pointer', float: 'left'
            }}
            onClick={ () => onDelete(task.id)} /></h4>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
import Task from './Task';

const Tasks = ({ tasks, onDelete, onSwitchReminder }) => {
    return(
        <>
            { tasks.map((task) => 
               (
                <Task key={task.id} 
                task={task} 
                onDelete={onDelete} 
                switchReminder={onSwitchReminder} />
               )
            )}
        </>
    )
}

export default Tasks
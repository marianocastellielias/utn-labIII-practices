import PropTypes from 'prop-types';
import ViewTasks from '../viewTasks/ViewTasks';
import ListGroup from 'react-bootstrap/ListGroup';

;
const Tasks = ({ tasks, onDelete, onChangeState }) => {
    return (
        <div>
            <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                Lista de Tareas
            </ListGroup.Item>
            </ListGroup>

            {tasks.map((task) => (
                <ViewTasks
                    key={task.id}
                    task={task.task}
                    completed={task.completed}
                    onDelete={onDelete}
                    onChangeState={onChangeState}
                    id={task.id}
                />
            ))}
       
            
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    onDelete: PropTypes.func,
    onChangeState: PropTypes.func,
};

export default Tasks
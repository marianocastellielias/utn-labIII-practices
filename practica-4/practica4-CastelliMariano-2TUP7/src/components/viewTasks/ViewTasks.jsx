import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaDeleteLeft } from "react-icons/fa6";

const ViewTasks = ({ task, onDelete, completed, onChangeState, id }) => {

    const taskStyle = {
        color: completed ? 'gray' : 'black',
    };

    return (
        <ListGroup.Item className="d-flex align-items-center">
            <Form.Check onClick={() => onChangeState(id)} aria-label="option 1" className="me-2" />
            <div style={taskStyle}>{task}</div>
            <button className="ms-auto text-danger btn btn-white btn-sm" onClick={() => onDelete(id)}>
                <FaDeleteLeft />
            </button>
        </ListGroup.Item>
    );
}

ViewTasks.propTypes = {
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeState: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default ViewTasks;
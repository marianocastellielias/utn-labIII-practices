import PropTypes from 'prop-types'

import { useState } from 'react';
import { Button, Card, Form } from "react-bootstrap";


const AddTasks = ({ onTaskDataSaved }) => {

    const [enteredTask, setEnteredTask] = useState("");

    const changeTaskHandler = (event) => {
        setEnteredTask(event.target.value);
    };


    const sumbitTaskHandler = (event) => {
        event.preventDefault();

        if (enteredTask.length === 0) {
          window.alert("no se puede agregar una tarea vacía");
          return;
        }


        const taskData = {
            task: enteredTask,
            completed: false,
        };

        onTaskDataSaved(taskData);

        setEnteredTask("");
    };


    return (
        <>
        <Card className="bg-dark mb-3" bg="success">
          <Card.Body>
            <Form className="text-white" onSubmit={sumbitTaskHandler}>
              
                  <Form.Group className="mb-3" controlId="taskTitle">
                    <Form.Label>Añadir tarea</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresar nueva tarea"
                      onChange={changeTaskHandler}
                      value={enteredTask}
                    />
                  </Form.Group>
                
              <Button variant="info" className="text-white" type="submit">+ AGREGAR</Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    )
}

AddTasks.propTypes = {
    onTaskDataSaved: PropTypes.func.isRequired,
}

export default AddTasks
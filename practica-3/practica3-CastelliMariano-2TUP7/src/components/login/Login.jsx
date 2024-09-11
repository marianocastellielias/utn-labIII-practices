import { Button, Form, Card } from "react-bootstrap";
import { useState } from "react";

const Login = () => {

    const [newName, setNewName] = useState('');
    

    const changeNameHandler = (event) => {
        let username = event.target.value;

        if (username.includes("o") || username.includes("O")) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!");
        }

        setNewName(event.target.value);
    }

    const sumbitHandler = (event) => {
        event.preventDefault();
        
        if (newName.includes("o") || newName.includes("O") || newName == "") {
            alert("Usuario inválido para registrarse");
        }
        else {
            alert("¡Usuario registrado correctamente!");
        }
    }

   

    return (
        <>
    
            <Card>
                <Card.Body>
                    <Form onSubmit={sumbitHandler}>
                        <Form.Group >
                            <Form.Label>Ingrese su nombre de usuario</Form.Label>
                            <br></br>
                            <Form.Control onChange={changeNameHandler} type="text" placeholder="username" />
                        </Form.Group>

                        <br></br>

                        <Button type="submit">
                            Registrarse
                        </Button>
                        <p>{newName}</p>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )

}



export default Login;
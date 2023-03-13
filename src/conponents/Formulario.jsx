import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {getId} from '../helpers/getId'

function Formulario({colab, setColab}) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [cargo, setCargo] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  const objetColab = {
    nombre,
    email,
    cargo, 
    id: getId (),
  };
  setColab ([...colab, objetColab])  
  
  setNombre('')
  setEmail('')
  setCargo('')
  }

  return (

    <Form onSubmit={handleSubmit} className='row'>
      <Form.Group className="m-3 col-auto" controlId="Nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Nombre" value={nombre} onChange={e=>setNombre(e.target.value)}/>
        </Form.Group>

      <Form.Group className="m-3 col-auto" controlId="Email">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="Email" placeholder="Ingrese Correo" value={email} onChange={e=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="m-3 col-auto" controlId="Cargo">
        <Form.Label>Cargo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Cargo" value={cargo} onChange={e=>setCargo(e.target.value)}/>
      </Form.Group>

      <Button className="m-3" variant="dark" type="submit" disabled={!nombre.trim() || !email.trim() || !cargo.trim()}>
        Agregar Colaborador
      </Button>
    </Form>
  );
}

export default Formulario;
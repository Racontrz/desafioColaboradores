import CardsRender from './CardsRender'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Cards({colab,}) {
  const [texto, setTexto] = useState('')
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Buscar"
          className="me-5"
          aria-label="Search"
          value={texto}
          onChange = {(e) => setTexto (e.target.value )}
        />
      </Form>
      <div className='d-flex flex-wrap'>
        {colab.filter((item) => {
          return texto.toLocaleLowerCase() === '' ? item : item.nombre.toLowerCase().includes(texto) ||
            texto.toLocaleLowerCase() === '' ? item : item.email.toLowerCase().includes(texto) ||
            texto.toLocaleLowerCase() === '' ? item : item.cargo.toLowerCase().includes(texto)
        }).map(colab => <CardsRender key={colab.id} colabs={colab} />)}

      </div>
    
    </div>
    
  );
}

export default Cards;
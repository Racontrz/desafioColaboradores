import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Bar from './conponents/Bar';
import Cards from './conponents/Cards';
import Formulario from './conponents/Formulario';
import { baseColaboradores } from './conponents/bd';


function App() {
  const [colab, setColab] = useState(baseColaboradores)
  
  return (
    <div className="App container">
      <Bar colab = {colab}/>
      <Formulario colab = {colab} setColab = {setColab} />
      <Cards colab = {colab} />
    </div>
  )
}

export default App
  
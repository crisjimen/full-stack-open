//Definición de un componente
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  //Se pueden usar también valores definidos en constantes
  const name="Cris";
  const age = 21;

  return (
    <div>
      <p>Hello world</p>
      //Utilización del componente definido anteriormente
      <Hello name="Marta" age="25" />
      <Hello name="Javier" age="40"/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App

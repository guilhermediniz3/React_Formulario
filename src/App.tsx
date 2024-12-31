import { useState } from "react";


type FormData={
  firstName: string;
  lastName: string;
}

function App() {
  const [fullName,setFullname]= useState<String>();
  const [formData,setFormData] = useState<FormData>({

    firstName: "",
    lastName: ""
  });

  function handlerInputChange(event:any){

    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]:value});
  }

  function handleFormSubmit(event:any){
    // metodo evita que o formulario seja enviado
    event.preventDefault();
   setFullname(formData.firstName + " " + formData.lastName);
  }

  
  return (
    <>
        <form onSubmit={handleFormSubmit}>
      <div>
        <input
        name="firstName"
        value={formData.firstName}
         type="text"
          placeholder="Digite seu nome"
          onChange={handlerInputChange}
          />
          
      </div>

      <div>
        <input 
        name="lastName"
        value={formData.lastName}
        type="text" 
        placeholder="Digite seu sobrenome" 
        onChange={handlerInputChange}
        />
      </div>

      <button type="submit">Mostrar nome completo</button>
    </form>
    <h2>{fullName}</h2>
    </>


  )
}

export default App

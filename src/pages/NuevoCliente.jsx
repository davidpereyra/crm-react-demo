import { useNavigate, Form } from "react-router-dom"
import Formulario from "../components/Formulario"


export function action(){
  console.log('submit con FORM');
}



function NuevoCliente() {

  const navegate = useNavigate()


  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">
          Nuevo Clientes
      </h1>
      <p className="mt-3">Completa los campos para registrar a un nuevo cliente</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navegate(-1)}
        >Volver</button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        <Form
          method="post"
        >
          <Formulario />
          <input
            type='submit'
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>

    </>
  )
}

export default NuevoCliente
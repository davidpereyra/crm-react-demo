import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    return(
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
                CRM - Clientes
            </h1>
            <p className="text-center">Existe un error</p>
            
            <p className="my-4 bg-red-600 text-white font-bold p-3 uppercase text-center">{error.statusText || error.message}</p>
        </div>
    )
}



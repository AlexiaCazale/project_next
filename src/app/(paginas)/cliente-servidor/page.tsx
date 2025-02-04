import Cliente from "@/components/cliente-servidor/Cliente";

import Servidor from "@/components/cliente-servidor/Servidor";

export default function PaginaClienteServidor(){
    return(
        <div className="plex flex-col gap-10">
            <div>
                <h1>Componente Cliente</h1>
                <Cliente/>
            </div>
            <div>
                <h1>Componente Servidor</h1>
                <Servidor/>
            </div>
        </div>
    )
}
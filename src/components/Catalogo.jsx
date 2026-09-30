import {useState} from 'react'
import TarjetaEquipo from './TarjetaEquipo'

function Catalogo({ equipos }) {
    const [soloDisponibles, setSoloDisponibles] = useState(false)
    const [busqueda, setBusqueda] = useState('')

    const visibles = equipos
        .filter((e) => !soloDisponibles || e.disponibles)
        .filter((e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    const totalDisponibles = equipos.reduce((suma, e) => (e.disponibles ? suma + 1 : suma), 0)

    return (
        <section>
            <h2>Catálogo de equipos</h2>
            <p>
                {totalDisponibles} de {equipos.length} equipos disponibles
            </p>
        </section>
    )
}

export default Catalogo
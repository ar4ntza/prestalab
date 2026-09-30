function TarjetaEquipo({ equipo }) {
    const { id, nombre, categoria, cantidad, disponibles } = equipo;

    return (
        <article className="tarjeta">
            <h3>{nombre}</h3>
            <p>id: {id} - {categoria}</p>
            <p>{disponibles ? 'Disponible' : 'prestado'}</p>
            <button type="button" disabled={!disponibles}>
                {disponibles ? 'Solicitar préstamo' : 'No disponible'}
            </button>
        </article>
    )
}

export default TarjetaEquipo
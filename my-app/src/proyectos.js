import React from 'react';

function Proyectos() {
    const handleOK = async () => {
        const data = { Email: 'mchirinos@trafficlight.mx', Rol: 'CenturionAdmi', Proyecto: ['Puebla', 'PROYECTO 1'] };

        try {
            // Realizar una solicitud POST a la URL de destino
            const response = await fetch('http://localhost:3010/Centurion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Asegurarse de que estamos enviando JSON
                },
                body: JSON.stringify(data), // Convertir el objeto de datos a JSON
            });
debugger
            // Verificar si la solicitud fue exitosa
            if (!response.ok) {
                alert('Error en la solicitud');
                return;
            }

            // Si la solicitud fue exitosa, redirigir a la URL
            // window.location.href = 'http://centurion.key-city.com';
            window.location.href = 'http://localhost:3000';
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Hubo un problema al enviar los datos');
        }
    };

    return (
        <div>
            <button onClick={handleOK}>Proyecto 1</button>
            <button onClick={handleOK}>Proyecto 2</button>
            <button onClick={handleOK}>Proyecto 3</button>
            <button onClick={handleOK}>Proyecto 4</button>
            <button onClick={handleOK}>Proyecto 5</button>
            <button onClick={handleOK}>Proyecto 6</button>
        </div>
    );
}

export default Proyectos;
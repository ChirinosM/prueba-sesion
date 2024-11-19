import React from 'react';

function Proyectos() {

    const handleOK = async (proy) => {
        try {
            const Email = 'mchirinos@trafficlight.mx'; //'joropeza@trafficlight.mx';
            const Proyecto = ['Puebla', proy];

            const userData = {
                Email
            };
            debugger
            const DataJSON = JSON.stringify(userData, null, 2); // Le da formato

            const response = await fetch('http://192.168.3.77:8000/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: DataJSON,
            });

            if (!response.ok)
                throw new Error(response.detail);

            // Redirigir con la URL construida
            window.location.href = `http://localhost:3000/Sesion?Email=${encodeURIComponent(Email)}&Proyecto=${encodeURIComponent(Proyecto.join(','))}`;
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <button onClick={() => handleOK('Perseo')}>Perseo</button>
            <button onClick={() => handleOK('ALQUIMIA')}>ALQUIMIA</button>
            <button onClick={() => handleOK('Proyecto 3')}>Proyecto 3</button>
            <button onClick={() => handleOK('Proyecto 4')}>Proyecto 4</button>
            <button onClick={() => handleOK('Proyecto 5')}>Proyecto 5</button>
        </div>
    );
}

export default Proyectos;
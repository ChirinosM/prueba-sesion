import React, { useState } from 'react';
import Proyectos from './proyectos';

function App() {
  const [user, setUsuario] = useState('');
  const [contra, setPassword] = useState('');
  const [respuesta, setRespuesta] = useState(false);

  const handleOK = async () => {
    const data = { usuario: user, password: contra };

    try {
      // Realizar una solicitud POST a la URL de destino
      const response = await fetch('http://localhost:3010/sesion', {
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

      setRespuesta(true);
      // Si la solicitud fue exitosa, redirigir a la URL
      // window.location.href = 'http://centurion.key-city.com';
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Hubo un problema al enviar los datos');
    }
  };

  if (respuesta) {
    return (
      <Proyectos />
    );
  } else {
    return (
      <div>
        <label>Usuario</label>
        <input
          onChange={(e) => setUsuario(e.target.value)}
        />
        <label>Contraseña</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleOK}>Entrar</button>
      </div>
    );
  }
}

export default App;
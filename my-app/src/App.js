import React, { useState } from 'react';

function App() {
  const [usuario, setUsuario] = useState('marielac');
  const [password, setPassword] = useState('1234');

  const handleOK = async () => {
    const data = { usuario: 'marielac', password: '1234' };

    try {
      // Realizar una solicitud POST a la URL de destino
      const response = await fetch('http://centurion.key-city.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Asegurarse de que estamos enviando JSON
        },
        body: JSON.stringify(data), // Convertir el objeto de datos a JSON
      });

      // Verificar si la solicitud fue exitosa
      if (!response.ok) {
        alert('Error en la solicitud');
        return;
      }

      // Si la solicitud fue exitosa, redirigir a la URL
      window.location.href = 'http://centurion.key-city.com';
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Hubo un problema al enviar los datos');
    }
  };

  return (
    <div>
      <label>Usuario</label>
      <input
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <label>Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleOK}>Entrar</button>
    </div>
  );
}

export default App;
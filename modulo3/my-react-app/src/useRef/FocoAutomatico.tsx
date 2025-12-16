import { useEffect, useRef } from 'react';

export default function FocoAutomatico() {
  const nombreRef = useRef(null); // Referencia para el input de nombre
  const apellidoRef = useRef(null); // Referencia para el input de apellido (si quieres usarlo después)

  useEffect(() => {
    nombreRef.current.focus(); // Foca solo el input de nombre al montar
  }, []);

  return (
    <div>
      <label>Nombre: </label>
      <input ref={nombreRef} placeholder="Escribe tu nombre aquí..." />
    </div>
    <div>
      <label>Apellido: </label>
      <input ref={apellidoRef} placeholder="Escribe tu apellido aquí..." />
    </div>    
  );
}

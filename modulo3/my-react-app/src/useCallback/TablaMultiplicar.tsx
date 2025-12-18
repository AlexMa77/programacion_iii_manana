import { useCallback } from 'react';

interface TablaProps {
  numero: number;
}

export default function TablaMultiplicar({ numero }: TablaProps) {
  const handleClick = useCallback((resultado: number) => {
    console.log('Resultado:', resultado);
  }, []);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }, (_, i) => {
          const multiplicador = i + 1;
          const resultado = numero * multiplicador;

          return (
            <tr key={multiplicador}>
              <td>
                {numero} × {multiplicador}
              </td>
              <td>
                <button onClick={() => handleClick(resultado)}>
                  {resultado}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

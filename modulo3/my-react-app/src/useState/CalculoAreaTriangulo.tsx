import { useState } from 'react';

export default function AreaTriangulo() {
  const [calculated, setCalculated] = useState(false);
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState<number | null>(null);

  const handleCalculate = () => {
    if (base === '' || height === '') {
      window.alert('Debe ingresar base y altura');
      return;
    }

    const b = parseFloat(base);
    const h = parseFloat(height);

    if (b <= 0 || h <= 0) {
      window.alert('Los valores deben ser mayores a 0');
      return;
    }

    const result = (b * h) / 2;
    setArea(result);
    setCalculated(true);
  };

  return (
    <div>
      {!calculated ? (
        <>
          <input
            type="number"
            placeholder="Base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
          <br />

          <input
            type="number"
            placeholder="Altura"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />

          <button onClick={handleCalculate}>
            Calcular área
          </button>
        </>
      ) : (
        <p>El área del triángulo es: <strong>{area}</strong></p>
      )}
    </div>
  );
}

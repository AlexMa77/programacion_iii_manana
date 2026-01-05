import { useState } from 'react';

export default function SalarioSemanal() {
  const [hours, setHours] = useState('');
  const [rate, setRate] = useState('');
  const [salary, setSalary] = useState(null);
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = () => {
    if (hours === '' || rate === '') {
      window.alert('Debe ingresar horas trabajadas y valor por hora');
      return;
    }

    const h = parseFloat(hours);
    const r = parseFloat(rate);

    if (h <= 0 || r <= 0) {
      window.alert('Los valores deben ser mayores a 0');
      return;
    }

    const result = h * r;
    setSalary(result);
    setCalculated(true);
  };

  return (
    <div>
      {!calculated ? (
        <>
          <input
            type="number"
            placeholder="Horas trabajadas"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
          <br />

          <input
            type="number"
            placeholder="Valor por hora"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <br />

          <button onClick={handleCalculate}>
            Calcular salario semanal
          </button>
        </>
      ) : (
        <p>
          Salario semanal: <strong>${salary}</strong>
        </p>
      )}
    </div>
  );
}

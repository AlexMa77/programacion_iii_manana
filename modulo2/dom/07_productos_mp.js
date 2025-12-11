const productos = [
  { nombre: "Casa Familiar", descripcion: "3 habitaciones, 2 baños", precio: 95000, existencia: "Disponible", ubicacion: "Quito - Norte" },
  { nombre: "Departamento", descripcion: "2 habitaciones, 1 baño", precio: 68000, existencia: "Vendido", ubicacion: "Quito - Centro" },
  { nombre: "Suite", descripcion: "1 habitación", precio: 42000, existencia: "Disponible", ubicacion: "Quito - Sur" },
  { nombre: "Terreno", descripcion: "500 m²", precio: 75000, existencia: "Disponible", ubicacion: "Tumbaco" },
  { nombre: "Local Comercial", descripcion: "70 m²", precio: 120000, existencia: "En negociación", ubicacion: "Cumbayá" },
  { nombre: "Casa Rentera", descripcion: "5 departamentos", precio: 210000, existencia: "Disponible", ubicacion: "Carapungo" },
  { nombre: "Oficina", descripcion: "45 m²", precio: 35000, existencia: "Disponible", ubicacion: "La Carolina" },
  { nombre: "Bodega", descripcion: "100 m²", precio: 30000, existencia: "Disponible", ubicacion: "Calderón" },
  { nombre: "Penthouse", descripcion: "Vista panorámica", precio: 180000, existencia: "Disponible", ubicacion: "González Suárez" },
  { nombre: "Casa de Campo", descripcion: "Terreno amplio", precio: 160000, existencia: "Vendido", ubicacion: "Los Chillos" }
];

const tabla = document.getElementById('cuerpoTabla');
productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});

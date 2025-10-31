// Función básica
function saludar(nombre?: string): string {
    return `Hola ${nombre}`;
}

console.log(saludar('Alex'));

// Función flecha
const sumar = (a: number, b: number): number => {
    return a + b;
}

console.log(sumar(5, 5));

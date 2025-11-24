try{
    console.log(clienteInexistente.nombre);
}catch(error){
    console.log("Error en MAC Inmobiliaria:", error.message)
}

try{
    console.log("MAC: Intentando cargar datos del inmueble...");
    throw new Error("Inmueble no encontrado en la base de datos");
}catch(error){
    console.log("Error en MAC Inmobiliaria:", error.message)
}finally{
    console.log("MAC: Proceso finalizado")
}

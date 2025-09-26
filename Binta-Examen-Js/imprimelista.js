  function mostrarArrayEnLista(array, idLista) {
  
        const lista = document.getElementById(idLista);

  if (!lista) {
    console.error("No se encontró la lista con el ID especificado.");
    return;
  }

  if (!Array.isArray(array)) {
    console.error("El primer argumento debe ser un array.");
    return;
  }

  lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

  array.forEach(item => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = item;
    lista.appendChild(nuevoElemento);
  });
}

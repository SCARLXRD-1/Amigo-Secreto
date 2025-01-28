// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Función para agregar un nombre a la lista
function agregarAmigo() {
    // Obtén el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y al final
  
    // Verifica si el campo está vacío
    if (nombre === "") {
      alert("Por favor, ingresa un nombre válido."); // Muestra alerta
      return; // Salir de la función si no hay nombre
    }
  
    // Crea un nuevo elemento de lista y agrega el nombre
    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
  
    // Agrega el nuevo elemento a la lista
    listaAmigos.appendChild(nuevoElemento);
  
    // Limpia el campo de entrada
    input.value = "";
  }
  
  // Función para sortear un nombre aleatoriamente
  function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const amigos = Array.from(listaAmigos.querySelectorAll("li")).map((li) => li.textContent);
  
    // Verifica si la lista está vacía
    if (amigos.length === 0) {
      alert("No hay nombres en la lista. Agrega al menos un nombre para realizar el sorteo.");
      return; // Salir de la función si no hay nombres
    }
  
    // Selecciona un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
  
    // Muestra el nombre seleccionado en la lista de resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
  }

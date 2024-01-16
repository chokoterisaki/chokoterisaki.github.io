  // Variable idioma
  let idioma = "en";
  console.log(idioma);
  // Condicion if-else anidada
  if (idioma == "en") {
    // Ocultar etiquetas de clase "es"
    document.querySelectorAll(".es").forEach(element => element.style.display = "none");
  } else {
    // Ocultar etiquetas de clase "en"
    document.querySelectorAll(".en").forEach(element => element.style.display = "none");
  }
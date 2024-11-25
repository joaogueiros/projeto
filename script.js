function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add a img light
    img.setAttribute("src", "./assets/avatar_light.png")
  } else {
    //se tiver sem light mode, manter a imagem norm
    img.setAttribute("src", "./assets/avatar.png")
  }
}
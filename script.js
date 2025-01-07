// Configura a data inicial
const startDate = new Date(Date.UTC(2024, 3, 5, 23, 0));

// Função para atualizar o cronômetro
function updateTimer() {
  const now = new Date(); // Data e hora atual
  const diff = now - startDate; // Diferença em milissegundos

  if (diff >= 0) { // Garante que a data inicial já passou
    // Convertendo milissegundos em unidades de tempo
    const totalSeconds = Math.floor(diff / 1000); // Total em segundos
    const days = Math.floor(totalSeconds / (60 * 60 * 24)); // Dias
    const hours = Math.floor((totalSeconds / (60 * 60)) % 24); // Horas restantes
    const minutes = Math.floor((totalSeconds / 60) % 60); // Minutos restantes
    const seconds = totalSeconds % 60; // Segundos restantes

    // Atualizar os elementos
    document.querySelector(".days").textContent = days;
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;

  } else {
    // Caso a data inicial esteja no futuro
    document.getElementById("timer-container").innerText = "A data inicial é no futuro!";
  }
}

// Atualiza o cronômetro a cada segundo
setInterval(updateTimer, 1000);

// Chamada inicial para exibir o cronômetro imediatamente
updateTimer();

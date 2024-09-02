function Timer({ initialTimeInSeconds }) {
  const initialTime =
    parseInt(localStorage.getItem("timer")) ||
    initialTimeInSeconds ||
    20 * 60 * 60;
  let time = initialTime;

  const timerElement = document.createElement("div");
  timerElement.classList.add("text-4xl", "font-semibold", "text-center");

  function updateTimer() {
    const intervalId = setInterval(() => {
      if (time > 0) {
        time--;
        const formattedTime = new Date(time * 1000).toISOString().substr(11, 8);
        timerElement.textContent = formattedTime;
        saveTime();
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  updateTimer();

  function saveTime() {
    localStorage.setItem("timer", time.toString());
  }

  return timerElement;
}

document.addEventListener("DOMContentLoaded", function () {
  const timerElements = document.querySelectorAll(".timer-container");
  timerElements.forEach(function (element) {
    const timer = Timer({ initialTimeInSeconds: 3600 * 20 });
    element.appendChild(timer);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const Colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let btn = document.querySelector(".btn");
  let nav = document.getElementById("nav");
  let icon = btn.querySelector("i");
  let btnChange = document.getElementById("btnChange");
  let span = document.querySelector(".color");
  let copier = document.querySelector(".copier");
  let successIcon = document.getElementById("success-icon");
  //Logique nav
  btn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    if (nav.classList.contains("nav-active")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
      btn.classList.add("button-active");
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
      btn.classList.remove("button-active");
    }
  });

  btnChange.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += Colors[Math.floor(Math.random() * Colors.length)];
    }
    document.body.style.background = hexColor;
    span.textContent = hexColor;
  });

  copier.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(span.textContent);

      successIcon.classList.remove("hidden");

      setTimeout(() => {
        successIcon.classList.add("hidden");
      }, 2000);
    } catch (err) {
      console.error("Échec de la copie : ", err);
    }
  });
});

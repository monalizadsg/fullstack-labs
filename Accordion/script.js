function handleAccordionOnClick() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((item) => {
    const btn = item.querySelector("button");
    item.addEventListener("click", () => {
      if (btn.innerHTML === "+") {
        btn.innerHTML = "-";
      } else if (btn.innerHTML === "-") {
        btn.innerHTML = "+";
      }
      item.classList.toggle("active");
    });
  });
}

handleAccordionOnClick();

function generateCurrentDate() {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dd = today.toLocaleDateString("en-US", { day: "2-digit" });
  const mmmm = today.toLocaleDateString("en-US", { month: "long" });
  const yyyy = today.toLocaleDateString("en-US", { year: "numeric" });

  document.querySelector(".dd").textContent = dd;
  document.querySelector(".mmmm").textContent = mmmm;
  document.querySelector(".yyyy").textContent = yyyy;
}

generateCurrentDate();

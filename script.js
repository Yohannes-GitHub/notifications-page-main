function test() {
  const number = document.getElementById("number");
  const unread = document.querySelectorAll(".unread-notification");
  const redDot = document.querySelectorAll("#red-dot");
  unread.forEach((node) => {
    node.classList.add("read-notification");
    node.classList.remove("unread-notification");
  });
  number.innerText = 0;
  redDot.forEach((node) => {
    node.classList.add("hidden");
  });
}

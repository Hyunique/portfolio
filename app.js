const cursor = document.querySelector("#cursor");
const cursor2 = document.querySelector("#cursor2");
document.addEventListener("mousemove", function (event) {
  const x = event.pageX - 10;
  const y = event.pageY - 10;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  cursor2.style.left = x + 5 + "px";
  cursor2.style.top = y + 5 + "px";
});

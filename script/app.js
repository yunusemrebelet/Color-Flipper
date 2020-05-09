function clickme() {
  let colors = ["red", "green", "blue"];
  let bodyy = document.getElementsByTagName("body").item(0);
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  bodyy.style.background = randomColor;
  let hex_code = document.getElementsByTagName("span").item(0);
  hex_code.innerHTML = randomColor;
}

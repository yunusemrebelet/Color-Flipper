function hexclick() {
  let hexes = "ABCDEF123456789";
  let hex_code = document.getElementsByTagName("span").item(0);
  var a = "#";
  for (var i = 0; i < 6; i++) {
    a += hexes.charAt(Math.floor(Math.random() * hexes.length));
  }
  hex_code.innerHTML = a;
  let bodyy = document.getElementsByTagName("body").item(0);
  bodyy.style.background = a;
}

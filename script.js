function Myfunc() {
    var name = prompt("Your name?");

    if (name != null) {
      document.getElementById("yourname").innerHTML =
      "Welcome to the static site " + name;
    }
}
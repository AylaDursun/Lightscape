var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var children = this.children;
    var plus = children.item(1);
    var minus = children.item(2);
    if (plus.style.display === "none") {
      plus.style.display = "block";
      minus.style.display = "none";
    } else {
      plus.style.display = "none";
      minus.style.display = "block"
    }
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
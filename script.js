var count1 = 0;
var count2 = 0;

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

var colorChange = document.getElementById("colorChange");
var shape = document.getElementById("shape");

btn1.addEventListener("click", function () {
  if (count1 == 0) {
    colorChange.style.backgroundColor = "yellow";
  } else if (count1 == 1) {
    colorChange.style.backgroundColor = "orange";
  } else if (count1 == 2) {
    colorChange.style.backgroundColor = "blue";
  } else {
    count1 = 0;
    colorChange.style.backgroundColor = "yellow";
  }

  count1++;
});

btn2.addEventListener("click", function () {
  if (count2 == 0) {
    shape.style.position = "relative";
    shape.style.top = "50px";
    shape.style.left = "50px";
    shape.style.backgroundColor = "antiquewhite";
    shape.style.height = "100px";
    shape.style.width = "100px";
    shape.style.borderRadius = "50%";
  } else if (count2 == 1) {
    shape.style.position = "relative";
    shape.style.top = "50px";
    shape.style.left = "50px";
    shape.style.backgroundColor = "antiquewhite";
    shape.style.height = "50px";
    shape.style.width = "100px";
  } else {
    count2 = 0;
    shape.style.position = "relative";
    shape.style.top = "50px";
    shape.style.left = "50px";
    shape.style.backgroundColor = "antiquewhite";
    shape.style.height = "100px";
    shape.style.width = "100px";
  }

  count2++;
});

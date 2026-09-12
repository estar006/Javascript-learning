<!DOCTYPE html>
<html>




<body>
<button id="myBtn">whats the time</button>
<p id="demo"></p>
<button id="colorBtn">change color</button>
<script>
let time = new Date();
document.getElementById("myBtn").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Current time is: " + time;
});

let color =["blue", "red" ,"pink"]
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
});

</script>
</body>
</html>

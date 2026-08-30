<!DOCTYPE html>
<html>
<head>
    <title>JavaScript If Statement Example</title>
</head>
<body>
<p id="demo"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<h1>conditions practice</h1>

<script>
    //if statement
let age  = 16;
let  text = "you can vote";

if (age < 18 ){
text = "too young  to vote"
}
document.getElementById("demo").innerHTML = text;

//else statement
const time = new Date().getHours();
if (time < 10) {
    greeting="good morning";
}else{
    greeting = "good day";
}
document.getElementById("demo2").innerHTML = greeting;

//else if
if (time < 10){
    greeting = "good morning";
}
else if(time < 18 ){
    greeting = "good day";
}
else{
    greeting = "good evening";
}
document.getElementById("demo3").innerHTML = greeting;
//tertiary operator
let price = 10;
let isMember = true;
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount)
document.getElementById("demo4").innerHTML = "Total price: $" + total;
</script>

</body>
</html>

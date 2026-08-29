<!DOCTYPE html>
<html>
<head>
<title>js learning</title>



</head>


<body>  


<p id="demo"></p>
<script>
    //functions
//call a function
function SayHello(){
    return "Hello world"
}
    let greeting = SayHello();

    document.getElementById("demo").innerHTML = greeting;


    //functions
//function to add two numbers
function add(a,b){              //function parameters
    return a + b;                //function return value
}
let result = add(5 ,5);             //function arguments
document.getElementById("demo").innerHTML = result;


</script>

</body>








</html>

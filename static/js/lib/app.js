// using from global funtion
console.log(Num2persian(1399)); // یک هزار و سیصد و نود و هشت
function clicked()
{
    var inputValue = document.getElementById('mainInput').value;
    var result = document.getElementById('result');
    result.innerHTML = alert(Num2persian(inputValue));
 setInterval(1000);
    inputValue = " ";
}
   

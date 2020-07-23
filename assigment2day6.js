function multiply()
{
var x = document.getElementById('title').value;
var i=1;
var result =' ';
for(i=1;i<11;i++)
{
    var c= parseInt(x) * parseInt(i);
    result += x + "X" + i + "=" + c +"</br>"
}

document.getElementById("multiply1").innerHTML = result;
    
}



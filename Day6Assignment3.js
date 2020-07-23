var name = prompt("Enter your Name","Anonymous");
var dark1 =document.getElementById('dark')
function darkMode()
{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "yellow";
}


const title1 = document.getElementById('title');
console.log(title1);
console.log(title1.innerHTML);
console.log(title1.innerText);

title1.innerText += `\t ${name}`;


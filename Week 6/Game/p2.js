const button1=document.getElementById("button1");




function hi(){
   // alert(button1.innerText);
   const ball=document.createElement("div");
   ball.className="ball";
   const cont=document.getElementById("container");
   cont.appendChild(ball);
}

button1.onclick=hi;
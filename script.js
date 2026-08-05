let turn = localStorage.getItem("turn");


if(turn === null){

turn = "Akshatha";

}


showTurn();



function showTurn(){

document.getElementById("turn").innerHTML =
"🌸 Today's turn: <b>" + turn + "</b>";

}




function planRide(){


let purnave =
document.getElementById("purnave").checked;


let akshatha =
document.getElementById("akshatha").checked;


let ashwini =
document.getElementById("ashwini").checked;


let akDad =
document.getElementById("akDad").checked;


let ashDad =
document.getElementById("ashDad").checked;



let answer="";


// Purnave absent

if(!purnave){

answer = `
🌧️ Purnave is absent today.

No Collin drop-off needed from Purnave's dad.

Check another ride arrangement.
`;

}


// Normal Akshatha day

else if(turn==="Akshatha" && akshatha && akDad){


answer=`

🌸 Today's Plan

🚗 Purnave's dad drops:

<b>Purnave + Akshatha</b>

<br>

🏫 Akshatha's dad picks everyone up.

`;

}


// Backup Ashwini

else if(ashwini && ashDad){


answer=`

🌼 Backup Plan

Akshatha unavailable.

🚗 Purnave's dad drops:

<b>Purnave + Ashwini</b>

<br>

🏫 Ashwini's dad picks everyone up.

`;

}


// Ashwini turn

else if(turn==="Ashwini" && ashwini && ashDad){


answer=`

🌼 Today's Plan

🚗 Purnave's dad drops:

<b>Purnave + Ashwini</b>

<br>

🏫 Ashwini's dad picks everyone up.

`;

}


// Backup Akshatha

else if(akshatha && akDad){


answer=`

🌸 Backup Plan

Ashwini unavailable.

🚗 Purnave's dad drops:

<b>Purnave + Akshatha</b>

<br>

🏫 Akshatha's dad picks everyone up.

`;

}


else{


answer=`

❌ No ride arrangement works today.

`;

}


document.getElementById("result").innerHTML=answer;


}




function nextTurn(){


if(turn==="Akshatha"){

turn="Ashwini";

}

else{

turn="Akshatha";

}


localStorage.setItem("turn",turn);

showTurn();

}



function resetApp(){

turn="Akshatha";

localStorage.setItem("turn",turn);

showTurn();

document.getElementById("result").innerHTML="";

}

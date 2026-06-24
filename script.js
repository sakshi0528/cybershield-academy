const toggle =
document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light");

});

const text =
"Aspiring SOC Analyst | Cybersecurity Enthusiast | Networking Learner";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();
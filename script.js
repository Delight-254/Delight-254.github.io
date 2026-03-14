const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for(let x = 0; x < columns; x++) drops[x] = 1;

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#0f0"; // green matrix letters
  ctx.font = fontSize + "px monospace";

  for(let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);
    if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 50);

console.log("Portfolio loaded successfully");

document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function(){
console.log("Navigating...");
});
});
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-fill").forEach((bar, i) => {
    const percentages = ["90%", "85%"]; // change per skill
    setTimeout(() => { bar.style.width = percentages[i]; }, 500);
  });
});
const text = "Cybersecurity Enthusiast | Ethical Hacker | Founder of Kali Shields";
let index = 0;
function typeWriter() {
  if(index < text.length){
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
window.addEventListener("load", typeWriter);
document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();

emailjs.sendForm(
"service_bcsqhb2",
"jh7exmk",
this
).then(function(){
document.getElementById("formStatus").innerText = "✅ Message sent!";
}, function(error){
document.getElementById("formStatus").innerText = "❌ Failed to send.";
});

this.reset();
});
/* ===== Hacker Terminal ===== */

const terminalInput = document.getElementById("terminal-command");
const terminalOutput = document.getElementById("terminal-output");

terminalInput.addEventListener("keydown", function(e){

if(e.key === "Enter"){

const command = terminalInput.value.toLowerCase();

let response = "";

if(command === "help"){

response = `
Available commands:<br>
whoami<br>
skills<br>
projects<br>
contact<br>
clear
`;

}

else if(command === "whoami"){

response = "Delight Mokaya - Ethical Hacker and Founder of Kali Shields";

}

else if(command === "skills"){

response = "Python | Penetration Testing | OSINT | Kali Linux | Web Security";

}

else if(command === "projects"){

response = "HackTheBox Labs, OSINT Investigations, Cybersecurity Portfolio";

}

else if(command === "contact"){

response = "Email: marydelight72@gmail.com";

}

else if(command === "clear"){

terminalOutput.innerHTML = "";
terminalInput.value = "";
return;

}

else{

response = "command not found. type 'help'";

}

terminalOutput.innerHTML += `<div>> ${command}</div>`;
terminalOutput.innerHTML += `<div>${response}</div>`;

terminalInput.value = "";

}

});


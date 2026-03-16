/* =========================
INTRO HACKER BOOT SCREEN
========================= */

const introLines = [

"Initializing Kali Shields security interface...",
"Loading security modules...",
"Connecting to encrypted network...",
"Establishing secure tunnel...",
"Scanning system environment...",
"",
"$ nmap -sS localhost",
"PORT   STATE SERVICE",
"22     open  ssh",
"80     open  http",
"443    open  https",
"",
"Running vulnerability scan...",
"[✔] Firewall active",
"[✔] Intrusion detection active",
"[✔] Encryption modules loaded",
"",
"Access granted.",
"Welcome to Kali Shields.",
"Launching portfolio interface..."

];

let introIndex = 0;

function runIntro(){

const introText = document.getElementById("intro-text");

if(introIndex < introLines.length){

introText.innerHTML += introLines[introIndex] + "\n";

introIndex++;

setTimeout(runIntro,400);

}else{

setTimeout(()=>{

document.getElementById("intro-screen").style.display="none";

},1500);

}

}

window.addEventListener("load",runIntro);



/* =========================
MATRIX BACKGROUND
========================= */

const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

const letters="01";
const fontSize=16;
const columns=canvas.width/fontSize;

const drops=[];

for(let i=0;i<columns;i++){
drops[i]=1;
}

function drawMatrix(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff9c";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
drops[i]=0;
}

drops[i]++;

}

}

setInterval(drawMatrix,50);



/* =========================
TYPEWRITER
========================= */

const text="Cybersecurity Enthusiast | Ethical Hacker | Founder of Kali Shields";

let index=0;

function typeWriter(){

if(index<text.length){

document.getElementById("typewriter").innerHTML+=text.charAt(index);

index++;

setTimeout(typeWriter,100);

}

}

window.addEventListener("load",typeWriter);



/* =========================
SKILLS ANIMATION
========================= */

window.addEventListener("load",()=>{

const percentages=["90%","85%"];

document.querySelectorAll(".skill-fill").forEach((bar,i)=>{

setTimeout(()=>{

bar.style.width=percentages[i];

},500);

});

});



/* =========================
EMAILJS FORM
========================= */

const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(
"service_bcsqhb2",
"jh7exmk",
this
)

.then(function(){

document.getElementById("formStatus").innerText="Message sent successfully";

},function(){

document.getElementById("formStatus").innerText="Failed to send message";

});

this.reset();

});

}



/* =========================
TERMINAL
========================= */

const terminalInput=document.getElementById("terminal-command");
const terminalOutput=document.getElementById("terminal-output");

let commandHistory=[];
let historyIndex=-1;



function runCommand(command){

command=command.toLowerCase();

if(command==="help"){

terminalOutput.innerHTML+=`
> help<br>
commands:<br>
whoami<br>
skills<br>
projects<br>
contact<br>
scan<br>
demo<br>
clear<br><br>`;

}

else if(command==="whoami"){

terminalOutput.innerHTML+=`
> whoami<br>
Delight Mokaya | Ethical Hacker | Founder of Kali Shields<br><br>`;

}

else if(command==="skills"){

terminalOutput.innerHTML+=`
> skills<br>
Python | Penetration Testing | OSINT | Kali Linux<br><br>`;

}

else if(command==="projects"){

terminalOutput.innerHTML+=`
> projects<br>
HackTheBox Labs<br>
OSINT Research<br>
Kali Shields<br><br>`;

}

else if(command==="contact"){

terminalOutput.innerHTML+=`
> contact<br>
Email: marydelight72@gmail.com<br><br>`;

}

else if(command==="clear"){

terminalOutput.innerHTML="";

}

else if(command==="scan"){

terminalOutput.innerHTML+=`> nmap scan target.com<br>`;

setTimeout(()=>{terminalOutput.innerHTML+="Starting Nmap...<br>";},500);
setTimeout(()=>{terminalOutput.innerHTML+="Scanning target...<br>";},1500);
setTimeout(()=>{terminalOutput.innerHTML+="22/tcp open ssh<br>";},2200);
setTimeout(()=>{terminalOutput.innerHTML+="80/tcp open http<br>";},2800);
setTimeout(()=>{terminalOutput.innerHTML+="443/tcp open https<br>";},3400);

}

else if(command==="demo"){

const lines=[

"$ nmap -sV target.com",
"PORT STATE SERVICE VERSION",
"22 open ssh OpenSSH",
"80 open http Apache",
"",
"$ gobuster dir -u http://target.com",
"/admin (200)",
"/login (200)",
"",
"$ sqlmap -u login.php --dbs",
"SQL injection detected",
"",
"[✔] vulnerability confirmed"

];

let i=0;

function demo(){

if(i<lines.length){

terminalOutput.innerHTML+=lines[i]+"<br>";

terminalOutput.scrollTop=terminalOutput.scrollHeight;

i++;

setTimeout(demo,600);

}

}

demo();

}

else{

terminalOutput.innerHTML+=`
> ${command}<br>
command not found<br><br>`;

}

}



/* =========================
TERMINAL INPUT
========================= */

if(terminalInput){

terminalInput.addEventListener("keydown",function(e){

if(e.key==="Enter"){

runCommand(terminalInput.value);

commandHistory.push(terminalInput.value);

historyIndex=commandHistory.length;

terminalInput.value="";

}

if(e.key==="ArrowUp"){

if(historyIndex>0){

historyIndex--;

terminalInput.value=commandHistory[historyIndex];

}

}

if(e.key==="ArrowDown"){

if(historyIndex<commandHistory.length-1){

historyIndex++;

terminalInput.value=commandHistory[historyIndex];

}else{

terminalInput.value="";

}

}

});

}
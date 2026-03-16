/* =========================
   MATRIX BACKGROUND
========================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function drawMatrix() {

  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff9c";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {

    const text = letters[Math.floor(Math.random() * letters.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 50);



/* =========================
   HEADER TYPEWRITER
========================= */

const text = "Cybersecurity Enthusiast | Ethical Hacker | Founder of Kali Shields";

let index = 0;

function typeWriter() {

  if (index < text.length) {

    document.getElementById("typewriter").innerHTML += text.charAt(index);

    index++;

    setTimeout(typeWriter, 100);

  }

}

window.addEventListener("load", typeWriter);



/* =========================
   SKILL BAR ANIMATION
========================= */

window.addEventListener("load", () => {

  const percentages = ["90%", "85%"];

  document.querySelectorAll(".skill-fill").forEach((bar, i) => {

    setTimeout(() => {

      bar.style.width = percentages[i];

    }, 500);

  });

});



/* =========================
   EMAILJS CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
      "service_bcsqhb2",
      "jh7exmk",
      this
    ).then(function () {

      document.getElementById("formStatus").innerText = "✅ Message sent!";

    }, function () {

      document.getElementById("formStatus").innerText = "❌ Failed to send.";

    });

    this.reset();

  });

}



/* =========================
   HACKER TERMINAL
========================= */

const terminalInput = document.getElementById("terminal-command");
const terminalOutput = document.getElementById("terminal-output");


function runCommand(command) {

  command = command.toLowerCase();

  let response = "";


  if (command === "help") {

    response =
`commands available:

help
whoami
skills
projects
contact
scan
demo
clear`;

    terminalOutput.innerHTML += `> ${command}<br>${response}<br>`;

  }


  else if (command === "whoami") {

    response = "Delight Mokaya - Ethical Hacker | Founder of Kali Shields";

    terminalOutput.innerHTML += `> ${command}<br>${response}<br>`;

  }


  else if (command === "skills") {

    response = "Python | Penetration Testing | OSINT | Kali Linux | Web Security";

    terminalOutput.innerHTML += `> ${command}<br>${response}<br>`;

  }


  else if (command === "projects") {

    response = "HackTheBox Labs | OSINT Research | Kali Shields";

    terminalOutput.innerHTML += `> ${command}<br>${response}<br>`;

  }


  else if (command === "contact") {

    response = "Email: marydelight72@gmail.com";

    terminalOutput.innerHTML += `> ${command}<br>${response}<br>`;

  }


  else if (command === "clear") {

    terminalOutput.innerHTML = "";

  }


  else if (command === "scan") {

    terminalOutput.innerHTML += `> scan target.com<br>`;

    setTimeout(()=>{terminalOutput.innerHTML += "Starting Nmap 7.94...<br>";},500);
    setTimeout(()=>{terminalOutput.innerHTML += "Scanning target.com (192.168.1.1)<br>";},1200);
    setTimeout(()=>{terminalOutput.innerHTML += "<br>PORT     STATE SERVICE<br>";},2000);
    setTimeout(()=>{terminalOutput.innerHTML += "22/tcp   open  ssh<br>";},2500);
    setTimeout(()=>{terminalOutput.innerHTML += "80/tcp   open  http<br>";},3000);
    setTimeout(()=>{terminalOutput.innerHTML += "443/tcp  open  https<br>";},3500);
    setTimeout(()=>{terminalOutput.innerHTML += "<br>Scan completed successfully.<br>";},4200);

  }


  else if (command === "demo") {

    terminalOutput.innerHTML += `> demo<br>`;

    const demoLines = [

      "[+] Initializing Kali Shields pentest engine...",
      "",
      "$ nmap -sV target.com",
      "Starting Nmap 7.94...",
      "Scanning target.com (192.168.1.1)",
      "",
      "PORT     STATE SERVICE VERSION",
      "22/tcp   open  ssh     OpenSSH 8.2",
      "80/tcp   open  http    Apache 2.4",
      "443/tcp  open  https   nginx 1.18",
      "",
      "$ gobuster dir -u http://target.com -w common.txt",
      "/admin      (Status: 200)",
      "/login      (Status: 200)",
      "/uploads    (Status: 301)",
      "",
      "$ sqlmap -u http://target.com/login.php --dbs",
      "[INFO] testing connection to the target URL",
      "[INFO] injection point found",
      "",
      "available databases:",
      "[*] users",
      "[*] credentials",
      "",
      "[+] Kali Shields security scan completed",
      "[!] Vulnerability detected: SQL Injection",
      "[✔] Recommendation: patch authentication query"

    ];

    let i = 0;

    function runDemo(){

      if(i < demoLines.length){

        terminalOutput.innerHTML += demoLines[i] + "<br>";

        terminalOutput.scrollTop = terminalOutput.scrollHeight;

        i++;

        setTimeout(runDemo, 600);

      }

    }

    runDemo();

  }


  else {

    terminalOutput.innerHTML += `> ${command}<br>command not found. type 'help'<br>`;

  }

}



/* =========================
   TERMINAL INPUT
========================= */

if (terminalInput) {

  terminalInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

      runCommand(terminalInput.value);

      terminalInput.value = "";

    }

  });

}



/* =========================
   AUTO DEMO ON PAGE LOAD
========================= */

window.addEventListener("load", () => {

  setTimeout(() => {

    runCommand("demo");

  }, 2000);

});
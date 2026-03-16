
/* ===== MATRIX BACKGROUND ===== */
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
  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";
  for(let i = 0; i < drops.length; i++){
    const text = letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);
    if(drops[i]*fontSize > canvas.height && Math.random()>0.975) drops[i]=0;
    drops[i]++;
  }
}
setInterval(draw, 50);

/* ===== TYPEWRITER ===== */
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

/* ===== SKILL BARS ===== */
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-fill").forEach((bar,i)=>{
    const percentages = ["90%","85%"];
    setTimeout(()=>{ bar.style.width = percentages[i]; },500);
  });
});

/* ===== EMAILJS CONTACT FORM ===== */
const contactForm = document.getElementById("contactForm");
if(contactForm){
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    emailjs.sendForm(
      "service_hy0w51r", // your Service ID
      "njf1v7p",         // your Template ID
      this
    )
    .then(function(response){
      document.getElementById("formStatus").innerText="✅ Message sent!";
      console.log("SUCCESS", response);
    }, function(error){
      document.getElementById("formStatus").innerText="❌ Failed to send";
      console.log("FAILED", error);
    });
    this.reset();
  });
}

/* ===== HACKER TERMINAL ===== */
const terminalInput = document.getElementById("terminal-command");
const terminalOutput = document.getElementById("terminal-output");

if(terminalInput){
  terminalInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      const command = terminalInput.value.toLowerCase();
      let response = "";
      switch(command){
        case "help":
          response = "commands: help, whoami, skills, projects, demo, contact, clear";
          break;
        case "whoami":
          response = "Delight Mokaya - Ethical Hacker | Founder of Kali Shields";
          break;
        case "skills":
          response = "Python | Penetration Testing | OSINT | Kali Linux | Web Security";
          break;
        case "projects":
          response = "HackTheBox Labs | OSINT Research | Kali Shields";
          break;
        case "demo":
          response = "Launching penetration test simulation...";
          terminalOutput.innerHTML += `<div>> demo</div><div>${response}</div>`;
          setTimeout(()=>{ terminalOutput.innerHTML += "<div>$ nmap -sV target.com</div>"; },1000);
          setTimeout(()=>{ terminalOutput.innerHTML += "<div>22/tcp open ssh OpenSSH 8.2</div>"; },2000);
          setTimeout(()=>{ terminalOutput.innerHTML += "<div>80/tcp open http Apache 2.4</div>"; },3000);
          setTimeout(()=>{ terminalOutput.innerHTML += "<div>$ hydra -l admin -P passwords.txt ssh://target.com</div>"; },4000);
          setTimeout(()=>{ terminalOutput.innerHTML += "<div>[22][ssh] login: admin password: admin123</div>"; },5000);
          setTimeout(()=>{ terminalOutput.innerHTML += "<div>$ sqlmap -u target.com/login.php --dbs</div>"; },6000);
          setTimeout(()=>{ terminalOutput.innerHTML += "<div>Database: users</div>"; },7000);
          setTimeout(()=>{ terminalOutput.innerHTML += "<div>Database: credentials</div>"; },7500);
          setTimeout(()=>{ terminalOutput.innerHTML += "<div>Simulation complete ✔</div>"; },8500);
          terminalInput.value="";
          return;
        case "contact":
          response = "Email: marydelight72@gmail.com";
          break;
        case "clear":
          terminalOutput.innerHTML="";
          terminalInput.value="";
          return;
        default:
          response = "command not found. type 'help'";
      }
      terminalOutput.innerHTML += `<div>> ${command}</div><div>${response}</div>`;
      terminalInput.value="";
    }
  });
}
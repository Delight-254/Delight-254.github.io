console.log("Portfolio loaded successfully");

document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function(){
console.log("Navigating...");
});
});
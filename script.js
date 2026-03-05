// ===== Dark Mode =====
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// ===== Projects Filtering =====
const filterContainer = document.querySelector(".filters");
const projects = document.querySelectorAll(".project");

filterContainer.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const category = e.target.dataset.category;

  // Active button state
  document.querySelectorAll(".filters button")
    .forEach(btn => btn.classList.remove("active"));

  e.target.classList.add("active");

  projects.forEach(project => {
    const projectCategory = project.dataset.category;

    if (category === "all" || projectCategory === category) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });
});


// ===== Skills Animation =====
const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {
  const level = skill.dataset.level;
  const bar = skill.querySelector(".progress div");
  bar.style.width = level + "%";
});


// ===== Form Handling =====
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    formMessage.textContent = "Please fill all fields correctly.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";
  form.reset();
});
const fire = document.querySelector(".fire");
const image = document.querySelector(".profile-img");

fire.style.display = "none";

image.addEventListener("mouseenter", () => {
  fire.style.display = "block";
});

image.addEventListener("mouseleave", () => {
  fire.style.display = "none";
});

emailjs.init("MCY4smX2J_9LNKusY");

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  emailjs.sendForm(
    "service_y2hkg9l",
    "template_l4nnxx8",
    this
  ).then(function() {

      message.textContent = "Message Sent Successfully!";
      message.style.color = "green";
      form.reset();

  }, function(error) {

      message.textContent = "Failed to send message";
      message.style.color = "red";

  });

});

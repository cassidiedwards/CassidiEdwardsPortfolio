// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const nav = document.getElementById("siteNav");
const btn = document.getElementById("menuBtn");

btn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile nav when a link is clicked
document.getElementById("navLinks")?.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.tagName === "A" && nav.classList.contains("open")) {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }
});

// Contact form -> mailto
const form = document.getElementById("contactForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(
    `Portfolio message from ${name || "Someone"}`,
  );
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
  );

  const to = "cassidiedwards12@yahoo.com";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});

//Typing effect for hero heading
document.addEventListener("DOMContentLoaded", function () {
  const text = "Hi, I’m Cassidi!";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function typeCharacter() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeCharacter, 120);
    }
  }

  typeCharacter();
});

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");

  // Stop blinking after 5 seconds
  setTimeout(() => {
    cursor.style.animation = "none";
    cursor.style.display = "none";
  }, 5000);
});

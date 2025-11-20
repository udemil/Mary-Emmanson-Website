// Update current year automatically
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact form handler (for Formspree)
const form = document.getElementById("contactForm");
const responseBox = document.getElementById("formResponse");

if (form && responseBox) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    responseBox.textContent = "Sending...";

    let data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        responseBox.textContent = "Message sent successfully!";
        form.reset();
      } else {
        responseBox.textContent = "Something went wrong. Please try again.";
      }
    } catch (err) {
      responseBox.textContent = "Network error. Please try again later.";
    }
  });
}

// ===============================
// READ MORE / READ LESS SCRIPT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".readmore").forEach(container => {
    const more = container.querySelector(".moreText");
    const btn = container.querySelector(".readMoreBtn");

    if (!more || !btn) return;

    // initial state
    more.classList.remove("expanded");      // ensure collapsed
    btn.textContent = "Read more";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("type", "button");

    btn.addEventListener("click", () => {
      const expanded = more.classList.toggle("expanded");
      btn.textContent = expanded ? "Read less" : "Read more";
      btn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  });
});

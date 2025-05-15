function handleQuote() {
  alert("Redirecting to quote form...");
  // In actual site, you'd redirect or show a modal here
}
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
      } else {
        el.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all elements with the animation class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("testimonialSlider");
  const leftBtn = document.querySelector(".arrow.left");
  const rightBtn = document.querySelector(".arrow.right");

  const scrollAmount = 320; // adjust to fit your card width + gap

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("testimonialSlider");
  const leftBtn = document.querySelector(".arrow.left");
  const rightBtn = document.querySelector(".arrow.right");

  const scrollAmount = 320;

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  // ✅ Autoplay every 4 seconds
  let autoScrollInterval = setInterval(() => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    // Optional: reset to beginning when scrolled too far
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 4000);

  // Pause on hover
  slider.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
  slider.addEventListener("mouseleave", () => {
    autoScrollInterval = setInterval(() => {
      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 4000);
  });
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.toggle-icon').textContent = '+';
    });

    // Toggle current FAQ
    if (!isOpen) {
      item.classList.add('open');
      button.querySelector('.toggle-icon').textContent = '−';
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form form");
  const messageBox = document.getElementById("form-message");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("input[type='text']").value;
    const email = contactForm.querySelector("input[type='email']").value;
    const message = contactForm.querySelector("textarea").value;

    if (!name || !email || !message) {
      messageBox.textContent = "Please fill out all fields.";
      messageBox.style.color = "red";
      messageBox.style.display = "block";
      return;
    }

    // Show success message
    messageBox.textContent = "✅ Your message has been sent successfully!";
    messageBox.style.color = "green";
    messageBox.style.display = "block";

    // Clear form
    contactForm.reset();
  });
});

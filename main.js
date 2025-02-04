
// Step by step section
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
  
      question.addEventListener('click', () => {
        item.classList.toggle('open');
      });
    });
  });
  



// Navigation section
document.addEventListener("DOMContentLoaded", function () {
  let submenuToggles = document.querySelectorAll(".submenu-toggle");
  let hamburgerMenu = document.querySelector(".hamburger-menu");
  let navbar = document.querySelector(".navbar");
//   let navLinks = document.querySelectorAll(".links a");

  submenuToggles.forEach(toggle => {
      toggle.addEventListener("click", function (e) {
          e.preventDefault();
          let subMenu = this.nextElementSibling;
          if (subMenu.style.display === "block") {
              subMenu.style.display = "none";
          } else {
              subMenu.style.display = "block";
          }
      });
  });

  hamburgerMenu.addEventListener("click", function () {
      navbar.classList.toggle("active");
  });

  navLinks.forEach(link => {
      link.addEventListener("click", function () {

          if (window.innerWidth <= 768) {
              navbar.classList.remove("active"); 
          }
          navLinks.forEach(nav => nav.classList.remove("active"));
          this.classList.add("active");
      });
  });
});


// Count Down Section
document.addEventListener("DOMContentLoaded", function () {
    function animateCountUp(element, start, end, duration, suffix = "") {
        let range = end - start;
        let increment = range / (duration / 30);
        let current = start;

        let timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.innerText = Math.round(current) + suffix;
        }, 30);
    }

    let elements = [
        { selector: ".pf-1:nth-child(1) .pf-1-1", start: 0, end: 47, duration: 2000 },
        { selector: ".pf-1:nth-child(2) .pf-1-1", start: 0, end: 20, duration: 2000 },
        { selector: ".pf-1:nth-child(3) .pf-1-1", start: 0, end: 100, duration: 2000, suffix: "%" },
        { selector: ".pf-1:nth-child(4) .pf-1-1", start: 0, end: 50, duration: 2000, suffix: "+" },
    ];

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let el = entry.target;
                let item = elements.find(e => el.matches(e.selector));
                if (item) {
                    animateCountUp(el, item.start, item.end, item.duration, item.suffix);
                    observer.unobserve(el); 
                }
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(item => {
        let el = document.querySelector(item.selector);
        if (el) {
            observer.observe(el);
        }
    });
});

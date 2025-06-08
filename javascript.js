window.onload = function() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%';
    const lettersArray = letters.split('');
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * canvas.height;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 33);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
};


function createHeader() {
  const header = document.createElement("header");

  // Heading title
  const h1 = document.createElement("h1");
  h1.id = "HeadingTitle";
  h1.textContent = "Callum Nolan";
  header.appendChild(h1);

  // Navigation
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const menuItems = [
    { text: "Home", link: "index.html" },
    { text: "Resume", link: "CN_A4_resume.html" },
    {
      text: "Skills Pages",
      link: "#",  // Use "#" since it's a parent menu
      subItems: [
        { text: "Communication Skills", link: "Communications skills page.html" },
        { text: "Customer Service Skills", link: "Customer_Service_Skills_Page.html" },
        { text: "Project Management Skills", link: "Project_Managment_skills_Page.html" },
        { text: "Web Skills Page", link: "Web_Skills_Page.html" }
      ]
    },
    { text: "Sign Up For Our News Letter", link: "Form_Page.html" }
  ];

  menuItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.link;
    a.className = "button";
    a.textContent = item.text;

    // Open "Sign Up For Our News Letter" in a new tab
    if (item.text === "Sign Up For Our News Letter") {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }

    li.appendChild(a);

    if (item.subItems) {
      const subUl = document.createElement("ul");
      subUl.className = "submenu";

      item.subItems.forEach(subItem => {
        const subLi = document.createElement("li");
        const subA = document.createElement("a");
        subA.href = subItem.link;
        subA.textContent = subItem.text;
        subLi.appendChild(subA);
        subUl.appendChild(subLi);
      });

      li.appendChild(subUl);
    }

    ul.appendChild(li);
  });

  nav.appendChild(ul);
  header.appendChild(nav);

  // Add header to the page
  document.getElementById("headerContainer").appendChild(header);
}



// Call the function to display the header
createHeader();

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("pageFooter");

  const menuItems = [
    { text: "Home", link: "index.html" },
    { text: "Resume", link: "CN_A4_resume.html" },
    {
      text: "Skills Pages",
      link: "#",
      subItems: [
        { text: "Communication Skills", link: "Communications skills page.html" },
        { text: "Customer Service Skills", link: "Customer_Service_Skills_Page.html" },
        { text: "Project Management Skills", link: "Project_Managment_skills_Page.html" },
        { text: "Web Skills Page", link: "Web_Skills_Page.html" }
      ]
    },
    { text: "Sign Up For Our News Letter", link: "Form_Page.html" }
  ];

  if (footer) {
    const linksHTML = menuItems
      .map(item => {
        if (item.subItems) {
          const subLinks = item.subItems
            .map(sub => `<li><a href="${sub.link}">${sub.text}</a></li>`)
            .join("");
          return `
            <div class="footer-submenu">
              <p>${item.text}</p>
              <ul>${subLinks}</ul>
            </div>
          `;
        } else {
          return `<a href="${item.link}">${item.text}</a>`;
        }
      })
      .join("");

    footer.innerHTML = `
      <div class="footer-links">
        ${linksHTML}
      </div>

      <div class="contact-info">
        <p>Email: <a href="mailto:info@callumnolan.com">info@callumnolan.com</a></p>
      </div>

      <div class="copyright-notice">
        <p>&copy; 2025 Callum Nolan. All rights reserved. All content on this website is either owned by Callum Nolan or used with permission.</p>
      </div>
    `;
  }
});



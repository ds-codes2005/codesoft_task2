const menuBtn = document.getElementById("Menubtn");
const navLinks = document.getElementById("nvlinks");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});


navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});



  const reasonSelect = document.getElementById('reason');
  const otherBox = document.getElementById('otherBox');

  reasonSelect.addEventListener('change', () => {
    if (reasonSelect.value.toLowerCase() === 'other') {
      otherBox.style.display = 'block';
    } else {
      otherBox.style.display = 'none';
    }
  });


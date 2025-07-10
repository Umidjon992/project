const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  let btn = document.querySelector('.dark');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (btn.innerHTML === '<i class="ai-moon"></i>') {
        btn.innerHTML = '<i class="ai-sun-fill"></i>';
        document.body.classList.add('dark_mode');

        btn.classList.add('clicked');
    } else {
        btn.innerHTML = '<i class="ai-moon"></i>';
        document.body.classList.remove('dark_mode');
        btn.classList.remove('white');
        btn.classList.remove('clicked');
    }
});

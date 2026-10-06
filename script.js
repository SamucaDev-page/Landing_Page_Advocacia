const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobileMenu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    mobileMenu.classList.toggle('show')
})

const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  freeMode: true,
  speed: 5000, // controla a velocidade
  autoplay: {
    delay: 0, // rolagem contínua
    disableOnInteraction: false
  },
  slidesPerView: 'auto', // deixa os slides no tamanho do conteúdo
  spaceBetween: 24, // espaço fixo entre eles
});

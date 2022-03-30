const botaoMenu = document.querySelector('.expande-menu');
const menuNavegacao = document.querySelector('.menu');

console.log(botaoMenu);
console.log(menuNavegacao);

botaoMenu.addEventListener('click' , () => {
    menuNavegacao.classList.toggle('menu-ativo');
})

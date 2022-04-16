const botaoMenu = document.querySelector('.expande-menu');
const menuNavegacao = document.querySelector('.menu');


console.log(botaoMenu);
console.log(menuNavegacao);

botaoMenu.addEventListener('click' , () => {
    menuNavegacao.classList.toggle('menu-ativo');
})

window.addEventListener('resize' , () => {
    let larguraDaTela = window.innerWidth;
    console.log(larguraDaTela);
    if(larguraDaTela > 768){
       menuNavegacao.classList.remove('menu-ativo');
    }
})




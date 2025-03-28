// Seleciona o header
const header = document.querySelector('header');

// Adiciona o evento de rolagem
window.addEventListener('scroll', () => {
    // Verifica se a página foi rolada mais de 100px
    if (window.scrollY > 200) {
        header.classList.add('active'); // Adiciona a classe 'active'
    } else {
        header.classList.remove('active'); // Remove a classe 'active'
    }
});

// Seleciona o botão do menu hambúrguer e a lista de navegação
const burgerBtnOpen = document.querySelector('.open');
const burgerBtnClose = document.querySelector('.close');

const navList = document.querySelector('.nav-list');

// Adiciona o evento de clique ao botão do menu hambúrguer
burgerBtnOpen.addEventListener('click', () => {
    navList.classList.toggle('active'); // Alterna a classe 'active' na lista de navegação
});
burgerBtnClose.addEventListener('click', () => {
    navList.classList.toggle('active'); // Alterna a classe 'active' na lista de navegação
});
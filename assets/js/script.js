"use strict";
//executar ao abrir o site:
//Elementos do site em variaveis
const MenuMobile = document.querySelector('.menuMobile');
const menuUl = document.querySelector('.container_menu ul');
const elementSkiils = document.querySelectorAll('.space_language .item');
const buttonProjects = document.querySelectorAll('.item_galery .btn');
const buttonProjectsQtde = buttonProjects.length;
const modalProject = document.querySelector('#modal');
const modalButtonClose = document.querySelector('.modal_close');
// MenuMobile
MenuMobile.addEventListener('click', function () {
    MenuMobile.classList.toggle('active');
    menuUl.classList.toggle('active');
});
let skills = [
    { order: 0, name: "html", percent: 90 },
    { order: 1, name: "css", percent: 90 },
    { order: 2, name: "JavasScript", percent: 70 },
    { order: 3, name: "TypeScript", percent: 60 },
    { order: 4, name: "Git", percent: 80 },
    { order: 5, name: "NodeJS", percent: 20 }
];
function colocarPortcentagem() {
    for (let x = 0; x < elementSkiils.length; x++) {
        let percent = skills[x].percent;
        let item = elementSkiils[x].childNodes[5].childNodes[1];
        item.style.width = (percent + "%");
    }
}
;
colocarPortcentagem();
//verificador abrir modal project
for (let x = 0; x < buttonProjectsQtde; x++) {
    buttonProjects[x].addEventListener('click', function () {
        let itemChosen = buttonProjects[x];
        let dataName = itemChosen.getAttribute('data-name');
        openModal();
        dataModal(dataName);
    });
}
function openModal() {
    modalProject.classList.remove("none");
}
function dataModal(dataName) {
    allProjects.forEach(x => {
        let elementTitle = document.querySelector('.modal_information h1');
        let elementSubTitle = document.querySelector('.modal_information h3');
        let elementDescription = document.querySelector('.modal_information h2');
        let buttonGithub = document.querySelector('.modal_links a.github');
        let buttonDeploy = document.querySelector('.modal_links a.deploy');
        let elementLanguages = document.querySelector('.modal_languages');
        if (x.name === dataName) {
            elementTitle.innerText = (x.title);
            elementSubTitle.innerText = (x.subTitle);
            elementDescription.innerText = (x.description);
            elementLanguages.innerHTML = ("");
            x.languages.forEach(language => {
                let divItem = document.createElement('div');
                divItem.setAttribute('class', 'item');
                let imgItem = document.createElement('img');
                imgItem.setAttribute('src', (`assets/img/icons/${language}.svg`));
                divItem.appendChild(imgItem);
                elementLanguages.appendChild(divItem);
            });
            buttonGithub.setAttribute('href', x.github);
            buttonDeploy.setAttribute('href', x.deploy);
        }
    });
}
modalButtonClose.addEventListener('click', closeModal);
function closeModal() {
    modalProject.classList.add("none");
}
const allProjects = [
    {
        name: 'firstsite-html5-css',
        title: 'Agência Digital Hosth',
        subTitle: 'Landipage de uma agência digital.',
        description: 'Site 100% responsivo com animações simples e moderna. Layout todo foi desenvolvido do zero por mim. Todo esse projeto foi realizado com apenas 7 dias de estudos no curso de HTML5 e CSS3, com a duração total de desenvolvimento de 4,5 dias.',
        languages: ['html', 'css'],
        github: 'https://github.com/victorhosth/firstsite-html5-css',
        deploy: 'https://victorhosth.github.io/firstsite-html5-css/'
    },
    {
        name: 'site-awax',
        title: 'Site Awax',
        subTitle: 'Landipage feita a partir de uma imagem',
        description: 'Site responsivo para todos os dispositivos, projeto indicado pelo curso, todo os elementos do sites foram entregues juntamente com o design final, meu trabalho foi apenas na montagem do código. Site feito após 11 dias de estudos, fiz antes do professor e o resultado foi o mesmo.',
        languages: ['html', 'css', 'javascript'],
        github: 'https://github.com/victorhosth/site-awax',
        deploy: 'https://victorhosth.github.io/site-awax/'
    },
];

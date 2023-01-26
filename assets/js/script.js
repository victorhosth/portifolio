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
const arrayFilter = document.querySelectorAll('.filter h5');
const arrayProjects = document.querySelectorAll('.galery .item_galery');
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
buttonProjects.forEach(x => {
});
for (let x = 0; x < buttonProjectsQtde; x++) {
    buttonProjects[x].addEventListener('click', function () {
        let itemChosen = buttonProjects[x];
        let dataName = itemChosen.getAttribute('data-name');
        dataModal(dataName);
        openModal();
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
        let myGithub = "https://github.com/victorhosth/";
        //colocando as inforamações na tela
        if (x.name === dataName) {
            elementTitle.innerText = (x.title);
            elementSubTitle.innerText = (x.subTitle);
            elementDescription.innerText = (x.description);
            //colocando os ícones
            elementLanguages.innerHTML = ("");
            x.languages.forEach(language => {
                let divItem = document.createElement('div');
                divItem.setAttribute('class', 'item');
                let imgItem = document.createElement('img');
                imgItem.setAttribute('src', (`assets/img/icons/${language}.svg`));
                divItem.appendChild(imgItem);
                elementLanguages.appendChild(divItem);
            });
            //colocando os links
            buttonGithub.setAttribute('href', myGithub += x.name);
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
        deploy: 'https://victorhosth.github.io/firstsite-html5-css/',
        filter: ["all", 'pages']
    },
    {
        name: 'site-awax',
        title: 'Site Awax',
        subTitle: 'Landipage feita a partir de uma imagem',
        description: 'Site responsivo para todos os dispositivos, projeto indicado pelo curso, todo os elementos do sites foram entregues juntamente com o design final, meu trabalho foi apenas na montagem do código. Site feito após 11 dias de estudos, fiz antes do professor e o resultado foi o mesmo.',
        languages: ['html', 'css', 'javascript'],
        deploy: 'https://victorhosth.github.io/site-awax/',
        filter: ['all', 'pages']
    },
    {
        name: 'anotador-online',
        title: 'Bloco de Notas Moderno',
        subTitle: 'Sistema de anotações moderna com configurações especiais',
        description: 'Projeto feito do zero, todo o design e a lógica foram desenvolvidos por mim, site dinâmico com tema White, Dark e outras configurações do projeto.',
        languages: ['html', 'css', 'javascript'],
        deploy: 'https://victorhosth.github.io/anotador-online/',
        filter: ['all', 'system']
    },
    {
        name: 'calculadora-js',
        title: 'Calculadora',
        subTitle: 'Complexa e moderna com várias funções',
        description: 'Design da calculadora foi inspirado na calculadora padrão da Samsung, lógica desenvolvida do zero por mim, este é o meu segundo projeto com menos de 20 dias estudando javascript.',
        languages: ['javascript', 'html', 'css'],
        deploy: 'https://victorhosth.github.io/calculadora-js/',
        filter: ['all', 'system']
    },
    {
        name: 'b7web-bateria',
        title: 'Bateria Musical',
        subTitle: 'Toque e/ou crie músicas incríveis',
        description: 'Projeto entregue pelo professor do curso, eu fiz somente a parte lógica.',
        languages: ['javascript'],
        deploy: 'https://victorhosth.github.io/b7web-bateria/',
        filter: ['all', 'logic']
    },
    {
        name: 'b7web-relogio-digital-e-analogico',
        title: 'Relógio',
        subTitle: 'Veja a hora atual aonde você estiver',
        description: 'Projeto entregue pelo professor do curso, eu fiz somente a parte lógica.',
        languages: ['javascript'],
        deploy: 'https://victorhosth.github.io/b7web-relogio-digital-e-analogico/',
        filter: ['all', 'logic']
    },
];
arrayFilter.forEach(filter => {
    //pego o elemento FILTER clicado e altero o visual, depois faço a filtragem em outra função
    let filterChosen = filter;
    filter.addEventListener('click', function () {
        for (let x = 0; x < arrayFilter.length; x++) {
            let item = arrayFilter[x];
            item.classList.remove('active');
        }
        filterChosen.classList.add('active');
        let sendFiltering = filterChosen.getAttribute('data-name');
        filtering(sendFiltering);
    });
});
function filtering(sendFiltering) {
    //colocar fisplay none em todos
    for (let x = 0; x < arrayProjects.length; x++) {
        let projectChosen = arrayProjects[x];
        projectChosen.classList.add('rotate');
        setTimeout(() => {
            projectChosen.classList.remove('rotate');
        }, 200);
        projectChosen.classList.add('none');
    }
    //tirar display none nos escolhidos
    let chosen = [];
    allProjects.forEach(project => {
        for (let x = 0; x < project.filter.length; x++) {
            let sendChosen = project.filter[x];
            if (sendChosen === sendFiltering) {
                chosen.push(project.name);
            }
        }
    });
    arrayProjects.forEach(project => {
        let projectChosen = project;
        let projectDataName = projectChosen.getAttribute('data-name');
        chosen.forEach(x => {
            if (x === projectDataName) {
                projectChosen.classList.remove('none');
            }
        });
    });
}

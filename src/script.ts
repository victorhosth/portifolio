// MenuMobile

const MenuMobile = document.querySelector('.menuMobile') as HTMLElement;

const menuUl = document.querySelector('.container_menu ul') as HTMLElement

MenuMobile.addEventListener('click', function () {
    MenuMobile.classList.toggle('active')
    menuUl.classList.toggle('active')
})



//colocando a porcentagem das SKIILS

const elementSkiils = document.querySelectorAll('.space_language .item')


type skiils = { order: number, name: string, percent: number }

let skills: skiils[] = [
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
        let item = elementSkiils[x].childNodes[5].childNodes[1] as HTMLElement;
        item.style.width = (percent + "%");
    }
}
colocarPortcentagem()




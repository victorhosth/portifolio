

let filtros = document.querySelectorAll('#projects .filter h5')
            


for(let x = 0; x < filtros.length; x++ ){
    filtros[x].addEventListener('click', function(){

        if(filtros[x].classList.contains('active')){

        }else{
            for(let y = 0; y < filtros.length; y++){
                filtros[y].classList.remove('active')
            };
            filtros[x].classList.add("active")
        }
    })
}


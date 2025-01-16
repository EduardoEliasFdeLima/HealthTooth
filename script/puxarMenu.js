indice = true;

document.getElementById('menu_mob').addEventListener("click", () => {


    //puxa o menu para baixo ativando a classe active nele
    const listaMenu = document.getElementById('list_menu');
    listaMenu.classList.toggle('activeMenu');


    //troca o icone no menu
    const iconeMenu = document.getElementById('menu_mob');
    indice ? iconeMenu.classList.remove('fa-bars') :  iconeMenu.classList.remove('fa-xmark');
    indice ? iconeMenu.classList.add('fa-xmark') : iconeMenu.classList.add('fa-bars');
    indice ? indice = false : indice = true;


})
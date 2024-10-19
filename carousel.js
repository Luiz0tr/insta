/******************Add the story ******************/
const image_profile = [
    ['https://i.ibb.co/GFXC57D/eu-2.jpg','+'],
    ['file:///C:/Users/luizo/OneDrive/%C3%81rea%20de%20Trabalho/TrabalhoFodaMadrugadoProBuiuPegador/TRabalho%20fodamadrugada/images/lucassss.jpg','Yamafugo'],
    ['file:///C:/Users/luizo/OneDrive/%C3%81rea%20de%20Trabalho/TrabalhoFodaMadrugadoProBuiuPegador/TRabalho%20fodamadrugada/images/ela.jpg','Akira'],
    ['file:///C:/Users/luizo/OneDrive/%C3%81rea%20de%20Trabalho/TrabalhoFodaMadrugadoProBuiuPegador/TRabalho%20fodamadrugada/images/cria%20do%20Rj.jpg','CriaRj'],
    ['file:///C:/Users/luizo/OneDrive/%C3%81rea%20de%20Trabalho/TrabalhoFodaMadrugadoProBuiuPegador/TRabalho%20fodamadrugada/images/tutu4.jpg','Tutu'],
    ['file:///C:/Users/luizo/OneDrive/%C3%81rea%20de%20Trabalho/TrabalhoFodaMadrugadoProBuiuPegador/TRabalho%20fodamadrugada/images/negao.jpeg','Justim'],
    ['file:///C:/Users/luizo/OneDrive/%C3%81rea%20de%20Trabalho/TrabalhoFodaMadrugadoProBuiuPegador/TRabalho%20fodamadrugada/images/dilma.jpeg','Dilma'],
    ['file:///C:/Users/luizo/OneDrive/%C3%81rea%20de%20Trabalho/TrabalhoFodaMadrugadoProBuiuPegador/TRabalho%20fodamadrugada/images/p-diddy-2012-vanity-fair-oscar-party-01.jpg','PDiDy'],
    ['file:///C:/Users/luizo/OneDrive/%C3%81rea%20de%20Trabalho/TrabalhoFodaMadrugadoProBuiuPegador/TRabalho%20fodamadrugada/images/alam.png','Alan'],
    ['https://i.ibb.co/mGk8pfR/buiu-triste.jpg','BuiuTriste'],
    ['https://i.ibb.co/4V2Qb4q/xandy-1.jpg','Xand Derrotado'],
    ['https://i.ibb.co/37x4ypH/estupro.jpg','Dudu'],
    ['file:///C:/Users/luizo/OneDrive/%C3%81rea%20de%20Trabalho/TrabalhoFodaMadrugadoProBuiuPegador/TRabalho%20fodamadrugada/images/m.jpg','Carreta'],
    ['https://i.ibb.co/syGtvx8/sono.jpg','Rafinha'],
    ['https://i.ibb.co/BqZGwqv/kayn.jpg','Kayn'],
]
const story_container = document.querySelector('.owl-carousel.items');
if(story_container){
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <img src="${image_profile[i][0]}">
            <p>${image_profile[i][1]}</p>
            `;
        story_container.appendChild(parentDiv);
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        500:{
            items:7,
            nav:false
        }
    }
})
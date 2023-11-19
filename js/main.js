$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
});

function search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('conteudo')

    for(i =0; i<x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none"
        }else{
            x[i].style.display = "list-item"
        }
    }
}

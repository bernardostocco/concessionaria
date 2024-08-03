let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.lista .item')
let indicadores = document.querySelector('.indicadores')
let dots = indicadores.querySelectorAll('ul li')
let list = container.querySelector('.lista')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {

    let itemOld = container.querySelector('.lista .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicadores.querySelector('ul li.ativo')
    dotsOld.classList.remove('ativo')
    dots[active].classList.add('ativo')

    indicadores.querySelector('.numeros').innerHTML = '0' + (active + 1)
}

nextButton.onclick = () => {

    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')

}

prevButton.onclick = () => {

    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')

}




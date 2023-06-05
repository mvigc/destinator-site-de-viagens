let containerItems = document.querySelector('.container_itens')

const images = [
    {"id": "1", "url":"./assets/maceio.png"},
    {"id": "2", "url":"./assets/fortaleza.png"},
    {"id": "3", "url":"./assets/maldivas.png"},
    {"id": "4", "url":"./assets/noruega.png"},
    {"id": "5", "url":"./assets/orlando.png"},
    {"id": "6", "url":"./assets/rioo.png"},
]

function loadImage (images, container){
    images.forEach(image => {
        container.innerHTML += `
        <div class='item_pac'>
            <img src='${image.url}'>
        </div> 
        `
    });
}

loadImage(images, containerItems)


let items = document.querySelectorAll('.item_pac')

function prevImg(){
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item_pac')
}

function nextImg(){
    let lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item_pac')
}

// setInterval(prevImg, 4000)


document.querySelector('#prev').addEventListener('click', prevImg)
document.querySelector('#next').addEventListener('click', nextImg)



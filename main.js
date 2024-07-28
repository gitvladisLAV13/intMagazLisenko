const mainBlock = document.querySelector("main.items");

items.forEach((item) => {
    mainBlock.innerHTML += `<div class="item">
    <img src="img/${item.img}" class="biggerImg">
    <h4>${item.name} - ${item.price}</h4>
    <p><img class="looppa" src=img/loopa.png onClick="loopa(${item.img})"></p>
    </div>`
    
    
});

function loopa(item) {
    item.style.width = '200px';
}
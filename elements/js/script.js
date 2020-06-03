'use strict';
//28. Получение элементов со страниц
/*
const box = document.getElementById('box');     //получаем только 1 элемент

console.log(box);

const btns = document.getElementsByTagName ('button'); //получаем псевдомассив элементов

console.log (btns[1]);

const circles = document.getElementsByClassName ('circle'); //получаем псевдомассив элементов
console.log (circles);

const hearts = document.querySelectorAll('.heart'); //получаем псевдомассив элементов
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');      //получаем только 1 элемент
console.log(oneHeart);*/

// 29. Действия с элементами на странице
const   box = document.getElementById('box'),
        btns = document.getElementsByTagName ('button'),
        wrapper = document.querySelector('.wrapper'),
        circles = document.getElementsByClassName ('circle'),
        hearts = document.querySelectorAll('.heart'), // можно и так hearts = wrapper.querySelectorAll('.heart')
        oneHeart = document.querySelector('.heart');   // oneHeart = wrapper.querySelector
                                                        //это чтобы меньше задействовать document
//console.dir(box);
//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/*for (let i = 0; i<hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';  //закрашиваем все сердца с помощью цикла
}*/

hearts.forEach (item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');

//document.body.append(div); //добавляем новый элемент в конец body

//document.querySelector('.wrapper').append(div);

wrapper.append(div); //добавляем div в конец wrapper

//wrapper.prepend(div); //добавляем div в начало wrapper

//hearts[0].before(div); //div помещается перед первым hearts

//hearts[0].after(div);   //div помещается после первого hearts

//circles[0].remove();    //удаление элемента circles

//hearts[0].replaceWith(circles[0]); //замена элемента circles  на элемент hearts
 
div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";

div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');

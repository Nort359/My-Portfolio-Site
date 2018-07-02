import "./sass/styles.scss";

import typingText from "./typing";

const tick = 30;

const [mainText, subText] = [
    document.querySelector(".header__text-main"),
    document.getElementsByClassName("header__text-sub") /* Массив */
]; /* Деструктивное присваивание */

const elements = [
    {
        node: mainText,
        message: mainText.innerHTML
    },
    {
        node: subText[0],
        message: subText[0].innerHTML
    },
    {
        node: subText[1],
        message: subText[1].innerHTML
    }
];

let delay = 0;

for (let item of elements) {
    item.node.innerHTML = ""; // Очищаем все элементы
    typingText(item.message, item.node, tick, delay); // Запускаем асинхронное печатание
    delay += item.message.length * tick;
}



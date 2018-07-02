/**
 * Функция, создающаяя анимацию печати сообщения
 * @param {string} message Сообщение, которое необходимо напечатать
 * @param {string} whereToWrite Строка, в которую необходимо напечатать сообщение
 * @param {number} tick Время в ms, за которое будет происходить печать одного символа
 * @param {number} delay Задержка перед началом печати сообщения
 */
export default function typingText(message, whereToWrite, tick = 50, delay = 0) {
    const fullMessage = message; // Текст, который нужно записывать
    let writeTo = whereToWrite, // элемент куда записывать
        del = delay, // Задержка перед написанием
        time = tick; // Время на написание одного символа в ms

    let currentMessage = ""; // Переменная для поочерёдной записи сообщения

    (() => {
        for (let j = 0; j < fullMessage.length; j++) {
            setTimeout(function () {
                currentMessage += fullMessage[j];
                writeTo.innerHTML = currentMessage;
                writeTo.innerHTML += j != (fullMessage.length - 1) ? '|' : '';
            }, time * j + del);
        }
    })();
}